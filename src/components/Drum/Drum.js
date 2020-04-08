import React, { useState } from "react";
import Display from "../Display";
import PadBank from "../PadBank";
import Toggle from "../Toggle";
import "./Drum.css";

const Drum = () => {
  const [state, setState] = useState({
    power: true,
    soundBank: true,
    display: "",
  });

  const updateDisplay = (text) => {
    setState((x) => {
      return { ...x, display: text };
    });
  };


  const toggleSoundBank = () => {
    setState((x) => {
      return { ...x, soundBank: !x.soundBank };
    });
  };

  const togglePower = () => {
    setState((x) => {
      return { ...x, power: !x.power };
    });
  };

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
        <Toggle label="BANK"  value={state.soundBank}
          toggleValue={toggleSoundBank}></Toggle>
      </div>
    </div>
  );
};

export default Drum;
