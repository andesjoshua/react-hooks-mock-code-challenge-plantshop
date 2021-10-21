import React from "react";

function Search({setValue, searchValue}) {


  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  );
}

export default Search;
