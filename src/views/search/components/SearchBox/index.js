import { useState } from "react";
import "./style.css";

export default function SearchBox({ onSearch, onClose, isSearching }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = ({ target: { value } }) => setSearchText(value);

  const handleCloseClick = () => {
    setSearchText("");
    onClose();
  }

  const handleSearchClick = (event) => {
    onSearch(searchText)
    event.preventDefault()
  }

  return (
    <div className="search-box">
      <h3 className="search-box-title">Personal search</h3>
      <form className="search-box-inputs">
        <label>
          <input
            className="search-box-input"
            value={searchText}
            onChange={handleSearchChange}
            type="text"
          />
        </label>
        <button
          type="submit"
          disabled={!searchText.length}
          className="search-box-button search--open"
          onClick={handleSearchClick}>
          Search
        </button>
        {isSearching && <button 
          type="reset"
          className="search-box-button search--close"
          onClick={handleCloseClick}>
          close
        </button>}
      </form>
    </div>
  );
}
