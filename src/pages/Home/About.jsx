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
                Welcome <br /> Asgardians!
              </h2>

              <p>
                Gods of Asgard is a P2E NFT Battle-Royale game rooted in Norse
                myhtology and powered by the Avalanche blockchain. Mysterious
                enemy forces are conspiring against the realms and disrupting
                the balance created by the Gods. Ready your weapons, the epic
                battle for the nine realms begins soon.
              </p>
              <p className="powered">Powered by Thor Financial</p>
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
