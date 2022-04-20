import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import {Container, Grid} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Player from "components/Audio/AudioPlayer";
import RadioButtonsGroup from "components/RadioButton/RadioButtonsGroup";
import CheckBoxGroup from "components/CheckBox/CheckBoxGroup";
import FillInTheBlanks from "components/FillInTheBlanks/FillInTheBlanks";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const url = require("../..//assets/audio/audio_example.mp3");

const QuestionWrapper = (props:any) => {
  const questions = [
    {
      type: "radio",
      image:
        "https://h5p.org/sites/default/files/h5p/content/713/images/file-5885c23902f31.jpg",
      audio: url,
      title: "What color does the blackcurrant berry actually have?",
      options: [
        {
          value: "Very dark Purple",
          selected: false,
          correct: true,
        },
        {
          value: "Blue",
          selected: false,
          correct: false,
        },
        {
          value: "Black",
          selected: false,
          correct: false,
        },
      ],
    },
    {
      type: "box",
      image:
        "https://h5p.org/sites/default/files/h5p/content/620/images/image-568b75eb0dded.jpg",
      label: "Checkbox demo",
      title: "What color does the strawberry actually have?",
      options: [
        {
          value: "Bright red",
          checked: true,
          correct: true,
        },
        {
          value: "Pink",
          checked: false,
          correct: false,
        },
        {
          value: "Blue",
          checked: false,
          correct: false,
        },
      ],
    },
    {
      type: 'fill',
      mode: 'select',
      image: "https://www.lifeinnorway.net/wp-content/uploads/2015/08/wild-berries-norway.jpg",
      audio: url,
      title: "Insert the missing words in this text about berries found in Norwegian forests and mountainous regions.",
      sentence: '<p>Bilberries (Vaccinium myrtillus), also known as berries are * edible, nearly black berries found in nutrient-poor soils.</p>' + 
      '<p> * berries (Rubus chamaemorus) are edible orange berries similar to raspberries or blackberries found in alpine and arctic tundra.</p>' +
      '<p>Redcurrant (Ribes rubrum) are red translucent berries with a diameter of 8~10 mm, and are closely related to its black colored relative * currant.</p>',
      options: {
        "books":
                  [
                    {
                        "title": "Professional JavaScript",
                        "authors": [
                            "Nicholas C. Zakas"
                        ],
                        "edition": 3,
                        "year": 2011
                    },
                    {
                        "title": "Professional JavaScript",
                        "authors": [
                            "Nicholas C.Zakas"
                        ],
                        "edition": 2,
                        "year": 2009
                    },
                    {
                        "title": "Professional Ajax",
                        "authors": [
                            "Nicholas C. Zakas",
                            "Jeremy McPeak",
                            "Joe Fawcett"
                        ],
                        "edition": 2,
                        "year": 2008
                    }
                  ]
        }
    
    },
    {
      type: 'fill',
      mode: 'text',
      image: "https://www.lifeinnorway.net/wp-content/uploads/2015/08/wild-berries-norway.jpg",
      audio: url,
      title: "Insert the missing words in this text about berries found in Norwegian forests and mountainous regions.",
      sentence: '<p>Bilberries (Vaccinium myrtillus), also known as berries are * edible, nearly black berries found in nutrient-poor soils.</p>' + 
      '<p> * berries (Rubus chamaemorus) are edible orange berries similar to raspberries or blackberries found in alpine and arctic tundra.</p>' +
      '<p>Redcurrant (Ribes rubrum) are red translucent berries with a diameter of 8~10 mm, and are closely related to its black colored relative * currant.</p>',
    
    },
  ];

  const { questionId } = useParams<{ questionId: string }>();
  let navigate = useNavigate();

  let [component, setComponent] = React.useState(Number(questionId));
  
  const handlePrevClick = () => {
    if (component >= 1) {
      component = component - 1;
      navigate("/questions/"+component);
    }
    setComponent(component);
  }
  
  const handleNextClick = () => {
    if (component < questions.length-1) {
      component = component + 1;
      navigate("/questions/"+component);
    }
    setComponent(component);
  }

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="lg">
        <p>
            Welcome to the questions section for Question ID : <b>{questionId}</b>
        </p>
        <Box sx={{bgcolor: 'white', height: '800px'}}>
        {questions[component].image && <CardMedia
            component="img"
            image={questions[component].image}
            alt="earth from space"
        />}
         <Grid>
         {questions[component].audio && <Player url={questions[component].audio} />}
        </Grid>
        {questions[component].title && <h3>{questions[component].title}</h3>}
        <Grid>
          {questions[component].type === 'box' && <CheckBoxGroup options={questions[component].options} />}
          {questions[component].type === 'radio' && <RadioButtonsGroup options={questions[component].options} /> }
          {questions[component].type === 'fill' && <FillInTheBlanks options={questions[component]} /> }
        </Grid>

        <Grid className="mx-0">
            <Button variant="primary" onClick={handlePrevClick}> &larr; Prev</Button>
            <Button variant="secondary" className="mx-2" onClick={handleNextClick}>Next &rarr;</Button>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default QuestionWrapper;
