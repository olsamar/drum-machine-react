import React, { useEffect, useRef } from "react";

function DrumPad(props) {
  const audioRef = useRef();
  console.log(audioRef);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === props.drumPadKey.toLowerCase()) {
      audioPlay();
    }
  };

  const audioPlay = () => {
    audioRef.current.play();
  };
  const source = `/sounds/${props.audiosource}`;

  return (
    <div className="drum-pad" id={props.id} onClick={audioPlay}>
      {props.drumPadKey}
      {/* <span>{props.id}</span> */}
      <audio
        className="clip"
        id={props.drumPadKey}
        src={source}
        ref={audioRef}
      ></audio>
    </div>
  );
}

export default DrumPad;
