import React from "react";
import Fade from "react-reveal/Fade";
function Built() {
  return (
    <div className="built cont">
      <div className="inner-built">
        <Fade cascade top>
          <div>
            <h1>Features</h1>
          </div>
        </Fade>
        <Fade top delay={400}>
          <p>
            Gods of Asgard features to improve and maximize your strength in the
            battle for the nine realms.
          </p>
        </Fade>

        <div className="feat-div">
          <Fade left>
            <div className="feat-box">
              <div>
                <h2>Summon</h2>
                <p>
                  Call upon the Bifrost to summon additional support on the
                  battlefield! This feature allows players to combine the power
                  of two NFT's with the same rarity to mint a brand new NFT
                  character.
                </p>

                <a
                  href="https://gods-of-asgard.gitbook.io/gods-of-asgard-whitepaper-v1.0/game-economy/summoning"
                  target={"blank"}
                  className="more-info"
                >
                  More Info
                </a>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="feat-box">
              <div>
                <h2>Sacrifice</h2>
                <p>
                  Offer your characters as a sacrifice to receive Yggdrasil's
                  blessing. Sacrificing allows players to burn their characters
                  to mint a brand new NFT character of a higher tier.
                </p>
                <a
                  href="https://gods-of-asgard.gitbook.io/gods-of-asgard-whitepaper-v1.0/game-economy/sacrifice"
                  target={"blank"}
                  className="more-info"
                >
                  More Info
                </a>{" "}
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="feat-box last-box">
              <div>
                <h2>Rent</h2>
                <p>
                  Rent your characters to fellow Asgardians to aid you in battle
                  and share the spoils of victory! Using our native renting
                  marketplace, NFT owners can rent out their characters for
                  others to play and earn a share of rewards.
                </p>
                <a
                  href="https://gods-of-asgard.gitbook.io/gods-of-asgard-whitepaper-v1.0/game-economy/renting"
                  target={"blank"}
                  className="more-info"
                >
                  More Info
                </a>{" "}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Built;
