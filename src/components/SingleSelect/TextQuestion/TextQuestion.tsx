import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./TextQuestion.css";

export default function TextQuestion(props:any) {
  return (
    <FormControl>
      <div>
        {props.question.question}
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
