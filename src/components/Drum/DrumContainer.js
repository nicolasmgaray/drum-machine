import React, { useState } from "react";
import Drum from "./Drum"

const DrumContainer = () => {
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
    <Drum
      state={state}
      updateDisplay={updateDisplay}
      togglePower={togglePower}
      toggleSoundBank={toggleSoundBank}
    ></Drum>
  );
};

export default DrumContainer;
