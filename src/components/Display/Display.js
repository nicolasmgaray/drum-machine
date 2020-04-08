import React from "react";
import "./Display.css";

const Display = ({ display, power }) => {
  return (
    <div id="display" className={power ? "on" : 'off'}>
      {power ? (display ? display : "POWER ON") : "POWER OFF"}
    </div>
  );
};

export default Display;
