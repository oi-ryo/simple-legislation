import React from "react";
import "draft-js/dist/Draft.css";
import "../styles/App.css";
import Navbar from "./Navbar";
import Title from "./Title";
import Category from "./Category";
import Element from "./Element";
import LawData from "../mock/lawData.json";

const lawData = LawData.data;
const elements = lawData.map((data) => (
  <Element text={data.text} key={data.text} />
));

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <div className="content">
        <div className="box">
          <Category />
          {elements}
        </div>
      </div>
    </div>
  );
};

export default App;
