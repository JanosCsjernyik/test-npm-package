import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = props => <div className="card">{props.children}</div>;

Card.propTypes = {};

export default Card;
