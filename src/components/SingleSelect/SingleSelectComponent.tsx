import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CardMedia from "@mui/material/CardMedia";
import {Container, Grid} from "@mui/material";
import Player from "components/shared/Audio/AudioPlayer";
import RadioButtonsGroup from "components/shared/RadioButton/RadioButtonsGroup";

import "./SingleSelectComponent.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextQuestion from "./TextQuestion/TextQuestion";
import AudioQuestion from "./AudioQuestion/AudioQuestion";
import ImageQuestion from "./ImageQuestion/ImageQuestion";

const cardImage = ("https://h5p.org/sites/default/files/h5p/content/713/images/file-5885c23902f31.jpg");
const url = require("../../assets/audio/audio_example.mp3");
const optionsArray = ['Very dark Purple', 'Blue', 'Black'];

const questions = [
  {
    type: 'audio',
    url: url,
    options: [
      {
        value: 'Very dark Purple',
        selected: false
      },
      {
        value: 'Blue',
        selected: false
      },
      {
        value: 'Black',
        selected: false
      }
    ]
  },
  {
    type: 'image',
    image: cardImage,
    options: [
      {
        value: 'Very dark Purple',
        selected: false
      },
      {
        value: 'Blue',
        selected: false
      },
      {
        value: 'Black',
        selected: false
      }
    ]
  },
  {
    type: 'text',
    question: 'What color does the blackcurrant berry actually have?',
    options: [
      {
        value: 'Very dark Purple',
        selected: false
      },
      {
        value: 'Blue',
        selected: false
      },
      {
        value: 'Black',
        selected: false
      }
    ]
  }
];

const questionNo = 0;
// let question: any;
let question: any = {
  type: 'image',
  image: cardImage,
  question: 'What color does the blackcurrant berry actually have?',
  url: url,
  options: [
    {
      value: 'Very dark Purple',
      selected: false
    },
    {
      value: 'Blue',
      selected: false
    },
    {
      value: 'Black',
      selected: false
    }
  ]
};

function getQuestion() {
  if (questionNo >= 0) {
    console.log(questionNo);
    console.log(questions[questionNo]);
    // return questions[questionNo];
    question = questions[questionNo];
  }
  return question;
}


export default function SingleSelect() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="lg">
        <Box sx={{bgcolor: 'white', height: '1000px'}}>
          <Grid>
            {/*{question = getQuestion()}*/}

            {question.type === 'text' ? <TextQuestion question={question}/> : null}
            {question.type === 'audio' ? <AudioQuestion question={question}/> : null}
            {question.type === 'image' ? <ImageQuestion question={question}/> : null}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
