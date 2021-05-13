import React, { useState, useEffect } from "react";
import axios from "axios";
import Element from "./Element";
import LawData from "../mock/lawData.json";

function Elements() {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("URL");

      setData(result.data);
    };

    fetchData();
  });

  console.log(data);
  const elements = data.map((item) => (
    <Element text={item.title} key={item.id} />
  ));

  return elements;
}

export default Elements;
