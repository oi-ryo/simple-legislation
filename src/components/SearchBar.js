import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div className="columns  is-vcentered">
      <div className="column">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              id="search"
              type="text"
              placeholder="法令名を入力"
            ></input>
          </div>
          <div className="control">
            <a className="button is-info" type="submit">
              検索
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
