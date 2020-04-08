import React from "react";
import "./Toggle.css";

const Toggle = ({ value=false, toggleValue, label }) => {

  return (
    <div className='toggle'>
      {label && <p className='toggle-label'>{label}</p>}
      <div onClick={toggleValue} className={`toggle-switch ${value ?  "on" : "off"}`}>
        <div></div>
      </div>
    </div>
  );
};

export default Toggle;
