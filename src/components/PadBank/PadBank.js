import React from "react";
import DrumPad from "../DrumPad";
import { bankOne, bankTwo } from "../../utils/soundBanks";
import "./PadBank.css";

const PadBank = ({ soundBank=1, updateDisplay, power=true }) => {
  const selectedSoundBank = soundBank === true ? bankOne : bankTwo;
 
  return (
    <div id="pad-bank">
      {selectedSoundBank.map((x) => (
        <DrumPad
          key={x.id}
          power={power}
          updateDisplay={updateDisplay}
          {...x}
        />
      ))}
    </div>
  );
};

export default PadBank;
