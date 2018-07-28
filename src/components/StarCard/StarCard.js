//sets up the reusable FriendCard component
import React from "react";
import "./StarCard.css";

//pass the image into each card so all 12 are rendered
const StarCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default StarCard;