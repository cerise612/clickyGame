import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div   className="card" role="img"
    aria-label="click item"
    onClick={() => props.imageSelected(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
  />
);

export default ImageCard;