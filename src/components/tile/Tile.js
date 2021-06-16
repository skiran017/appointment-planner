import React from "react";

export const Tile = ({ data }) => {
  return (
    <div className="tile-container">
      {Object.keys(data).map((item, idx) => {
        if (idx === 0) {
          return <p className="tile-title">{data[item]}</p>;
        }
        return <p className="tile">{data[item]}</p>;
      })}
    </div>
  );
};
