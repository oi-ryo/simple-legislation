import React, { useState, useEffect } from "react";
import axios from "axios";
import Element from "./Element";
import LawData from "../mock/lawData.json";

const lawData = LawData.data;
function Elements() {
  const [data, setData] = useState(lawData);
  const elements = lawData.map((data) => (
    <Element text={data.text} key={data.text} />
  ));

  return elements;
}

export default Elements;
