import React from "react";

const Category = () => {
  return (
    <div className="columns is-vcentered has-text-centered has-text-weight-bold is-size-4">
      <div className="column">
        <div className="box has-background-grey-lighter">改正前</div>
      </div>
      <div className="column is-1 has-text-centered">
        <span className="icon has-text-grey-light">
          <i className="fas fa-caret-right"></i>
        </span>
      </div>
      <div className="column">
        <div className="box has-background-grey-lighter">
          <span className="has-text-danger">改正後</span>
        </div>
      </div>
    </div>
  );
};

export default Category;
