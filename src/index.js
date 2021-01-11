import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
// import PrimeraApp from "./PrimeraApp";

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
    {/* <PrimeraApp saludo="hola" subtitulo="react" /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
