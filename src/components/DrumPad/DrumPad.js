import React from "react";
import "./DrumPad.css";

const DrumPad = ({ id, keyTrigger, url, isActive, playSound }) => {
  return (
    <div
      className={`drum-pad ${isActive ? "on" : "off"}`}
      onClick={playSound}
      id={id}
    >
      <audio className="clip" id={keyTrigger} src={url} />
      {keyTrigger}
    </div>
  );
};

export default DrumPad;
