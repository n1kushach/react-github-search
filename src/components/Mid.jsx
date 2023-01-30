import React from "react";
import IconSearch from "../assets/icon-search.svg";

export const Mid = ({handleUsernameChange, fetchData}) => {
  return (
    <div className="mid">
      <div className="mid-main">
        <div className="mid-main-left">
          <img className="icon-search" src={IconSearch}></img>
          <input
            onChange={(e) => handleUsernameChange(e)}
            className="search-input"
            placeholder="Search GitHub username..."
          ></input>
        </div>
        <div className="mid-main-right">
          <button onClick={() => fetchData()}>Search</button>
        </div>
      </div>
    </div>
  );
};
