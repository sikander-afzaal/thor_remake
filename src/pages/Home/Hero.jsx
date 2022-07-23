import React from "react";
// assets
import discord from "../../assets/icons/discord-grey.svg";
import twitter from "../../assets/icons/twitter-grey.svg";
import circles from "../../assets/icons/circles-grey.svg";
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
            <div className="btn-div">
              <button className="mint">MINT NFT</button>
              <a href="#" className="rent">
                Renting
              </a>
              <a
                href="https://drive.google.com/file/d/1XbOKF5lAy536VmO6nG_xEzEZgA5GNV7M/view"
                target={"blank"}
                className="mint"
              >
                Play Demo
              </a>
            </div>
            <div className="social-div-hero">
              <a target={"blank"} href="https://discord.gg/F3B4sY5RtN">
                <img src={discord} alt="..." />
              </a>
              <a
                target={"blank"}
                href="https://twitter.com/godsofasgardp2e?s=21&t=D4tQYm0V4VeQtorulTCF9g"
              >
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
