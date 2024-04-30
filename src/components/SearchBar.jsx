import { useState } from "react";

import searchIcon from "/assets/images/icon-search.svg";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchBar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img src={searchIcon} className="searchIcon" />
    </form>
  );
};

export default SearchBar;
