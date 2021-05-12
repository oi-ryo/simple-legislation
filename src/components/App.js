import React, { useEffect } from "react";
import "draft-js/dist/Draft.css";
import "../styles/App.css";
import Navbar from "./Navbar";
import Title from "./Title";
import Category from "./Category";
import Elements from "./Elements";

const App = () => {
  useEffect(() => {
    console.log("Access to useEffect");
  });

  return (
    <div className="App">
      <Navbar />
      <Title />
      <div className="content">
        <div className="box">
          <Category />
          <Elements />
        </div>
      </div>
    </div>
  );
};

export default App;
