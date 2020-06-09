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

  const source = `${process.env.PUBLIC_URL}/sounds/${props.audiosource}`;

  return (
    <div id="element">
      <div className={props.className} id={props.id} onClick={audioPlay}>
        {props.drumPadKey}

        <audio
          className="clip"
          id={props.drumPadKey}
          src={source}
          ref={audioRef}
        ></audio>
      </div>
      <span>{props.id}</span>
    </div>
  );
}

export default DrumPad;
