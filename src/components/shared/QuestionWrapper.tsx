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
import ImageSelection from "components/ImageSelection/ImageSelection";

const url = require("../..//assets/audio/audio_example.mp3");

const QuestionWrapper = () => {
  let navigate = useNavigate();
  const { questionId } = useParams<{ questionId: string }>();
  let [component, setComponent] = React.useState(Number(questionId));

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
    {
      type: 'image',
      mode: 'single',
      title: "Select images.",
      images: [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          selected: false
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          selected: false
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          selected: false
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          selected: false
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          selected: false
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          selected: false
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
          selected: false
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
          selected: false
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          selected: false
        },
      ]
    },
  ];

  const handlePrevClick = () => {
    if (component > 0) {
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
          {questions[component].type === 'image' && <ImageSelection options={questions[component]} /> }
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
