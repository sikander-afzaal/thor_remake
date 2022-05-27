import React from "react";
import thor from "../../assets/characters/thor.mp4";
import thorPoster from "../../assets/characters/thor.png";
import heimdall from "../../assets/characters/heimdall.mp4";
import heimdallPoster from "../../assets/characters/heimdall.png";
import odin from "../../assets/characters/odin.mp4";
import odinPoster from "../../assets/characters/odin.png";
import freya from "../../assets/characters/freya.mp4";
import freyaPoster from "../../assets/characters/freya.png";
import NftCard from "../../components/NftCard/NftCard";
import Fade from "react-reveal/Fade";
function Character() {
  return (
    <div className="character-cont cont">
      <div className="shadow-char"></div>
      <div className="shadow-char"></div>
      <div id="collection" className="character">
        <div>
          <h1>The Gods of Asgard</h1>
        </div>
        <Fade top delay={400}>
          <p>
            The God of Asgard are NFTs from our upcoming collection minting May
            1st. Each God is equipped with their own unique skills and story.
            The NFT's act as your playable character and are your key to
            entering the GoA universe.
          </p>
        </Fade>
        <div className="wrapper-grid">
          <Fade delay={200} bottom>
            <NftCard
              img={heimdall}
              desc={`The watchman of the gods and guardian of the Bifrost; Heimdall, defends the rainbow bridge that connects all nine realms together. He is gifted with the power of prescience; a divine capacity of foresight, allowing him to see and hear across all realms, both mortal and god alike. He wields, Hofund, a sword with the ability to draw energy from other magical entities that exist within the universe.`}
              name={"heimdall"}
              poster={heimdallPoster}
            />
          </Fade>
          <Fade delay={400} bottom>
            <NftCard
              img={freya}
              desc={`Queen of the Valkyries and goddess of love and war, Freya, is
            equipped with her sword, shield, and magical bow. Blessed by magical
            forces, she leads her fearless Valkyries into battle; the entheat &
            powerful league of goddesses, who form her royal guard.`}
              name={"freya"}
              poster={freyaPoster}
            />
          </Fade>
          <Fade delay={600} bottom>
            <NftCard
              img={thor}
              desc={`Son of, Odin, and the god of thunder, Thor, wields his mystical
            hammer, Mjolnir. He is equipped with his belt, Megingjord, bestowing
            him with increased strength and governance over the powerful element
            of lightning.`}
              name={"thor"}
              poster={thorPoster}
            />
          </Fade>
          <Fade delay={800} bottom>
            <NftCard
              img={odin}
              desc={`The great & powerful all father and king of Asgard. Odin is the
            strongest, fiercest, and most wise of all the Gods in all the nine
            realms. Equipped with his magical spear, Gungnir, he is ever ready
            to bring order to the universe; fighting side by side with his
            comrades to restore peace and prosperity to its lands.`}
              name={"odin"}
              poster={odinPoster}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Character;
