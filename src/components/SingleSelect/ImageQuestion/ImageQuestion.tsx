import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./ImageQuestion.css";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";

export default function ImageQuestion(props:any) {
  return (
    <FormControl>
      <div>
        <CardMedia
          component="img"
          image={props.question.image}
          alt="earth from space"
        />
      </div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {
          props.question.options.map((option: any, index: any) => {
            return <FormControlLabel control={<Radio />} key={index} value={option.selected} label={option.value}/>
          })
        }
      </RadioGroup>
    </FormControl>
  );
}
