import React from "react";
import Fade from "react-reveal/Fade";
function Built() {
  return (
    <div className="built cont">
      <div className="inner-built">
        <Fade cascade top>
          <div>
            <h1>Built on the Blockchain</h1>
          </div>
        </Fade>
        <Fade top delay={400}>
          <p>
            Combining gaming with blockchain technology, it's now possible to
            provide a way for gamers to be rewarded for doing what they love,
            playing games.
          </p>
        </Fade>

        <div className="built-box-div boxes-div">
          <Fade left>
            <div className="built-box">
              <div>
                <h2>Defi</h2>
                <p>
                  With Decentralized Finance, we can leverage blockchain ran
                  economy models. This creates community ran economies where
                  players can earn tokens while they play. The community also
                  holds power with Gods of Asgard, with the ability to vote on
                  future updates and improvements.
                </p>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="built-box">
              <div>
                <h2>Ownership</h2>
                <p>
                  Using Blockchain technology, players can own their characters
                  and other in-game assets. In traditional gaming, developers of
                  the game own and control all assets. Players are free to sell,
                  purchase, and trade the blockchain assets including character
                  NFTs and tokens earned.
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="built-box last-box">
              <div>
                <h2>Summon New Gods</h2>
                <p>
                  Create new NFT's! With the power of the Bifrost, the gods can
                  summon and create new playable NFT characters. By owning two
                  of the same generation NFTs, players can spend $ASG and $THOR
                  to create new generations of NFT's
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Built;
