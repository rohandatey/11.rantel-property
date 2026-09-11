import React from "react";
import "./Card.css";
import house from "../../assets/house.jpg";
import house1 from "../../assets/housekichen.jpg";
import house2 from "../../assets/houseliving.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="images">
        <img src={house} alt="img" />
        <img src={house1} alt="img" />
        <img src={house2} alt="img" />
      </div>
      <span className="cardspan1">2BHK villa in Gwalior</span>
      <span className="cardspan2">₹20,000/Month</span>
    </div>
  );
};

export default Card;
