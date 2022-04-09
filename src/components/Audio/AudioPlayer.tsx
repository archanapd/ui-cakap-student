import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";

const Player = ({ url }: { url: string }) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  const mainIconColor = "#000";
  return (
    <div>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}

      <IconButton
        aria-label={playing ? "pause" : "play"}
        onClick={() => toggle()}
      >
        {playing ? (
          <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
        ) : (
          <PlayArrowRounded
            sx={{ fontSize: "3rem" }}
            htmlColor={mainIconColor}
          />
        )}
      </IconButton>
    </div>
  );
};

export default Player;
