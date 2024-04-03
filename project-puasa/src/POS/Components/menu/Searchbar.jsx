import  { useState } from "react";

const SearchBar = ({ onChange,searchQuery }) => {
 

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={onChange}
      placeholder="Search Menu"
      className={`w-1/3 p-1 text-base text-sm outline-none border-2 rounded-md shadow border-slate-400 `}
    />
  );
};

export default SearchBar;