import React from "react";
import { useState } from "react";

function BgColor() {
  const [color, setColor] = useState("");

  const handleClick = (color) => {
    localStorage.setItem("color", color);
    setColor(color);
  };
  return (
    <center>
      <div
        style={{
          backgroundColor: localStorage.getItem("color"),
          height: "100vh",
        }}
      >
        <button onClick={() => handleClick("red")}>Red</button>
        <button onClick={() => handleClick("yellow")}>Yellow</button>
        <button onClick={() => handleClick("green")}>Green</button>
      </div>
    </center>
  );
}

export default BgColor;
