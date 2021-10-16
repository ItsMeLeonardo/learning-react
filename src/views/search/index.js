import { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import './style.css'

export default function Search() {
  
  const getGames = async (params) => {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${params}`
    
    const response = await fetch( url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "7028af46dcmsh56246c485fca18cp1be055jsnb15ace0594c7"
      }
    })
    const games = await response.json()
    return games
  }

  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([]);

  const handleCloseSearch = () => {
    setIsAtTop(false)
    setResults([])
  };
 

  const handleSearchClick = (textSearch) => {

    setIsAtTop(true)
    getGames(textSearch)

    // id title genre platform
    .then(games => {      
      const filteredData = games?.map(game => {
        return {
          id: game.id,
          title: game.title,
          genre: game.genre,
          platform: game.platform,
          thumbnail: game.thumbnail,
          website: game.game_url,
        }
      })
      setResults(filteredData);
      
    }).catch(console.log)


  };
  
  return (
    <div className={`search ${isAtTop && "search--top"}`}>
      <SearchBox
        onSearch={handleSearchClick} 
        onClose={handleCloseSearch}
        isSearching={isAtTop}
      />
      <SearchResults results={results} isSearching={isAtTop}/>
    </div>
  );
}