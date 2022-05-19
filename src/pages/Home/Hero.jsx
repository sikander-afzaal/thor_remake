import React from "react";
import CountDown from "../../components/CountDown/CountDown";
// assets
import discord from "../../assets/icons/discord.svg";
import twitter from "../../assets/icons/twitter.svg";
import circles from "../../assets/icons/circles.svg";
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
            {/* <CountDown /> */}
            <div className="btn-div">
              <button className="mint">MINT NFT</button>
              <button className="rent">RENTING</button>
            </div>
            <div className="social-div-hero">
              <a target={"blank"} href="https://discord.gg/thornodes">
                <img src={discord} alt="..." />
              </a>
              <a target={"blank"} href="https://twitter.com/GodsofAsgardP2E">
                <img src={twitter} alt="..." />
              </a>
              <a target={"blank"} href="https://thornodes.medium.com/">
                <img src={circles} alt="..." />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Hero;
