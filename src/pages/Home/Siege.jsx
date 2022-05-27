import React from "react";
import sign from "../../assets/icons/Union.svg";
import Fade from "react-reveal/Fade";
function Siege() {
  return (
    <Fade delay={1000}>
      <div className="siege">
        <img src={sign} alt="" className="sign" />
        <p>
          Mysterious forces have begun laying siege upon the realms of
          yggdrasil, the tree of worlds. Odin has called upon the Gods of Asgard
          to take the bifrost and maintain order in the nine realms.
        </p>
        <img src={sign} alt="" className="sign" />
      </div>
    </Fade>
  );
}

export default Siege;
