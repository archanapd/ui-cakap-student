import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CardMedia from "@mui/material/CardMedia";
import { Container, Grid } from "@mui/material";
import Player from "components/Audio/AudioPlayer";
import RadioButtonsGroup from "components/RadioButton/RadioButtonsGroup";

import "./SingleSelectComponent.css";
const cardImage = ("https://h5p.org/sites/default/files/h5p/content/713/images/file-5885c23902f31.jpg");
const url = require("../../assets/audio/audio_example.mp3");


const optionsArray = ['Very dark Purple', 'Blue', 'Black'];

export default function SingleSelect() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>
        <CardMedia
            component="img"
            image={cardImage}
            alt="earth from space"
        />
         <Grid>
         <Player url={url} />
        </Grid>
        <h3>What color does the blackcurrant berry actually have?</h3>
        <Grid>
          <RadioButtonsGroup options={optionsArray}/>
        </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
