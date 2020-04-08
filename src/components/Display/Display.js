import React from "react";
import "./Display.css"

const Display = ({display, power}) => {
  return <div id="display" className={power && 'on'}>{power ? display : "POWER OFF"}</div>;
};

export default Display;
