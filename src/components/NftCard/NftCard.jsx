import React from "react";
import "./NftCard.css";
function NftCard({ img, desc, name }) {
  return (
    <div className="wrapper-character">
      <img src={img} alt="" />
      <div className="pop-div">
        <p className="pop-text">{desc}</p>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default NftCard;
