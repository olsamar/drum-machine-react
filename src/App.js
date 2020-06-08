import React, { useState } from "react";
import Header from "./components/header";
import Display from "./components/display";
import DrumPad from "./components/drumpad";

import "./App.css";

const drumPadElements = [
  {
    id: "clap",
    drumPadKey: "Q",
    audiosource: "clap.wav",
    className: "drum-pad",
  },
  {
    id: "hihat",
    drumPadKey: "W",
    audiosource: "hihat.wav",
    className: "drum-pad",
  },
  {
    id: "kick",
    drumPadKey: "E",
    audiosource: "kick.wav",
    className: "drum-pad",
  },
  {
    id: "boom",
    drumPadKey: "A",
    audiosource: "boom.wav",
    className: "drum-pad",
  },
  {
    id: "openhat",
    drumPadKey: "S",
    audiosource: "openhat.wav",
    className: "drum-pad",
  },
  {
    id: "ride",
    drumPadKey: "D",
    audiosource: "ride.wav",
    className: "drum-pad",
  },
  {
    id: "snare",
    drumPadKey: "Z",
    audiosource: "snare.wav",
    className: "drum-pad",
  },
  {
    id: "tink",
    drumPadKey: "X",
    audiosource: "tink.wav",
    className: "drum-pad",
  },
  { id: "tom", drumPadKey: "C", audiosource: "tom.wav", className: "drum-pad" },
];

function App() {
  const [displaySound, setDisplaySound] = useState("");

  // const clearDisplaySound = () => {
  //   setTimeout(() => {
  //     setDisplaySound("");
  //   }, 1000);
  // };

  const drumPad = drumPadElements.map((element) => (
    <DrumPad
      key={element.drumPadKey}
      drumPadKey={element.drumPadKey}
      id={element.id}
      audiosource={element.audiosource}
      onPlay={setDisplaySound}
      // clearDisplaySound={clearDisplaySound}
    />
  ));

  return (
    <div id="drum-machine">
      <Header />
      <Display displaySound={displaySound} />
      <div id="drumPadPanel">{drumPad}</div>
    </div>
  );
}

export default App;
