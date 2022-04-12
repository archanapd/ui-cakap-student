import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./AudioQuestion.css";
import Player from "../../shared/Audio/AudioPlayer";
import * as React from "react";

export default function AudioQuestion(props:any) {
  return (
    <FormControl>
      <div>
        <Player url={props.question.url}/>
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
