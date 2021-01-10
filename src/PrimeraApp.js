import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const PrimeraApp = () => {
  const saludo = "Hola";
  return (
    <>
      <h1>{saludo} mundo</h1>
      <p>Mi primera app</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string,
};

export default PrimeraApp;
