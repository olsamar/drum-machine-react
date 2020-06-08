import React, { useEffect, useRef } from "react";

function DrumPad(props) {
  const audioRef = useRef();

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
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    audioRef.current.play();
    props.onPlay(props.id);
  };

  const source = `/sounds/${props.audiosource}`;

  return (
    <div className={props.className} id={props.id} onClick={audioPlay}>
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
