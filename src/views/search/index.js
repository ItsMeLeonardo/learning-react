import { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import './style.css'
import data from '../../data/users.json'

export default function Search() {
  
  const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url)
    const users = await response.json()
    
    return users
  }

  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([]);

  const handleCloseSearch = () => {
    setIsAtTop(false)
    setResults([])
  };

  const handleSearchClick = (textSearch) => {
    getUsers()
    .then(user => {      
      const textSearchMinus = textSearch.toLowerCase();
      const filteredData = user.filter(({name, username, email}) => 
          name.toLowerCase().includes(textSearchMinus) ||
          username.toLowerCase().includes(textSearchMinus)||
          email.toLowerCase().includes(textSearchMinus)
      );
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