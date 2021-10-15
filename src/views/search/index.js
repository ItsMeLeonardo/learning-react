import { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import './style.css'
import data from '../../data/users.json'

export default function Search() {
  
  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([]);

  const handleCloseSearch = () => {
    setIsAtTop(false)
    setResults([])
  };

  const handleSearchClick = (textSearch) => {
    if(data?.length) {
      setIsAtTop(true);
      
      const textSearchMinus = textSearch.toLowerCase();
      const filteredData = data.filter(({name, username, email}) => 
          name.toLowerCase().includes(textSearchMinus) ||
          username.toLowerCase().includes(textSearchMinus)||
          email.toLowerCase().includes(textSearchMinus)
      );
      setResults(filteredData);
    }
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