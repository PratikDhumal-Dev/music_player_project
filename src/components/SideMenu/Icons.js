import React from "react";
import spotifyLogo from "./spotify-logo.jpg";
import spotifyEmblem from "./spotify-emblem.jpg";
import musyncLogo from "./musync.jpeg";
import musyncLogoWhite from "./Musync-logos_white.png";
import musyncText from "./Musync-text.png";
import "./Icon.css";

const SpotifyLogo = () => {
  return <img className="musyncLogo" src={musyncLogo} alt={"Spotify Logo"} />;
};

const SpotifyEmblem = () => {
  return (
    <div className="musyncLogo1">
      <img
        className="musyncLogoWhite"
        src={musyncLogoWhite}
        alt={"Spotify Emblem"}
      />
      <img className="musyncText" src={musyncText} />
    </div>
  );
};

export { SpotifyLogo, SpotifyEmblem };
