import React from "react";
import { useState } from "react";

function Btn({ name }) {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`btn btn-primary ${!active ? "bg-transparent border-0" : ""}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      {name}
    </button>
  );
}

export default Btn;
