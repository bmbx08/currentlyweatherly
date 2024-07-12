import React from "react";
import {Button} from "react-bootstrap";

const SearchSection = ({search}) => {
    return (
    <>
    <div className="search-section">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" onKeyPress={(event)=>search(event)}/>
    </div>
    </>
  );
};

export default SearchSection;
