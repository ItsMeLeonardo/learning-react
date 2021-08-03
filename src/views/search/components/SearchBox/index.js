import { useState } from "react";
import "./style.css";

export default function SearchBox({ onSearch, onClose, isSearching }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = ({ target: { value } }) => setSearchText(value);

  const handleCloseClick = () => {
    setSearchText("");
    onClose();
  }

  return (
    <div className="search-box">
      <h3 className="search-box-title">Personal search</h3>
      <div className="search-box-inputs">
        <label>
          <input
            className="search-box-input"
            value={searchText}
            onChange={handleSearchChange}
            type="text"
          />
        </label>
        <button 
          disabled={!searchText.length}
          className="search-box-button search--open"
          onClick={() => onSearch(searchText)}>
          Search
        </button>
        {isSearching && <button 
          disabled={!searchText.length}
          className="search-box-button search--close"
          onClick={handleCloseClick}>
          close
        </button>}
      </div>
    </div>
  );
}
