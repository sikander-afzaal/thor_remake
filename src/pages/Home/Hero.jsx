import React from "react";
import CountDown from "../../components/CountDown/CountDown";
// assets

import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/background.png";
import Fade from "react-reveal/Fade";
const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <img src={bg} alt="" className="bg" />
        <Fade top>
          <img src={logo} alt="logo " className="logo-hero" />
        </Fade>
        <Fade bottom big cascade>
          <div className="hero_container">
            <CountDown />

            <div className="btn-div">
              <button className="mint">MINT NFT</button>
              <button className="rent">RENTING</button>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Hero;
