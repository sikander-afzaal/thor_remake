import React from "react";
import img from "../../assets/images/about.png";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <>
      <div className="about cont-about" id="about">
        <div className="t_container">
          <Fade cascade bottom>
            <div className="t_left">
              <h2>
                Welcome <br /> Asgardians
              </h2>

              <p>
                Gods of Asgard is a P2E NFT game rooted in Norse mythology and
                powered by the Avalanche blockchain. Battle, survive, and earn
                your way though an epic Battle-Royale while exploring the vast
                open world of Midgard. Ready your weapons, the battle for the
                nine realms begins now.
              </p>
              <p className="powered">Powered by Thor Financial</p>
              <a
                href="https://gods-of-asgard.gitbook.io/gods-of-asgard-whitepaper-v1.0/"
                className="more-info play-demo"
                target={"blank"}
              >
                WHITEPAPER
              </a>
            </div>
          </Fade>
          <Fade right>
            <div className="t_right">
              <img className="about-img" src={img} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
