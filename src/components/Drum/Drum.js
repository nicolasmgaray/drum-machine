import React  from "react";
import Display from "../Display";
import PadBank from "../PadBank";
import Toggle from "../Toggle";
import "./Drum.css";

const Drum = ({ state, updateDisplay, togglePower, toggleSoundBank }) => {
  return (
    <div id="drum-machine">
      <Display {...state}></Display>
      <PadBank updateDisplay={updateDisplay} {...state}></PadBank>
      <div id="toggles-container">
        <Toggle
          label="POWER"
          value={state.power}
          toggleValue={togglePower}
        ></Toggle>
        <Toggle
          label="BANK"
          value={state.soundBank}
          toggleValue={toggleSoundBank}
        ></Toggle>
      </div>
    </div>
  );
};

export default Drum;
