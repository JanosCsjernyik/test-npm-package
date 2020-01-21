import React from "react";
import PropTypes from "prop-types";
import style from "./Card.css";

const Card = props => (
  <div className="card">
    <p>just a random line </p>
    {props.children}
  </div>
);

Card.propTypes = {};

export default Card;
