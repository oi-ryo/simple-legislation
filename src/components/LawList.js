import React from "react";

const LawList = ({ lawList = [] }) => {
  return (
    <>
      {lawList.map((data, index) => {
        if (data) {
          return (
            <div key={data.name}>
              <p>{data.name}</p>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default LawList;
