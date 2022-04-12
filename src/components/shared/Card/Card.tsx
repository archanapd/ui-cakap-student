import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import Player from "components/shared/Audio/AudioPlayer";
import RadioButtonsGroup from "components/shared/RadioButton/RadioButtonsGroup";
import ImageList from "components/ImageList/ImageListGroup";
import "./Card.css";
const cardImage = require("../../../assets/earth-space.jpeg");
const url = require("../../../assets/audio/audio_example.mp3");

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="140"
        image={cardImage}
        alt="earth from space"
      />
      <CardContent>
        <Grid className="audio">
          <Typography gutterBottom component="div">
            Click here for audio
          </Typography>
          <Player url={url} />
        </Grid>

        <Grid>
          <RadioButtonsGroup />
          <ImageList />
        </Grid>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}
