import React, { useEffect, useState, useCallback } from "react";
import DrumPad from "./DrumPad";

const DrumPadContainer = ({
  id,
  keyTrigger,
  url,
  keyCode,
  power = true,
  updateDisplay,
}) => {
  const [isActive, setActive] = useState(false);

  const playSound = useCallback(() => {
    setActive(true);
    setTimeout(() => setActive(false), 100);
    if (!power) return;
    updateDisplay(id);
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
  }, [id, keyTrigger, power, updateDisplay]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.keyCode === keyCode) playSound();
    },
    [playSound, keyCode]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <DrumPad
      id={id}
      keyTrigger={keyTrigger}
      url={url}
      isActive={isActive}
      playSound={playSound}
      handleKeyPress={handleKeyPress}
    ></DrumPad>
  );
};

export default DrumPadContainer;
