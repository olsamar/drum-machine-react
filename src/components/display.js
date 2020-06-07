import React from "react";

function Display(props) {
  // console.log(props);

  return (
    <div id="display">
      <p>{props.id}</p>
    </div>
  );
}

export default Display;
