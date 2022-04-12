import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./RadioButtonsGroup.css";

export default function RadioButtonsGroup(props:any) {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {props.options.map((val:any, indx:any) => {
          return <FormControlLabel control={<Radio />} key={indx} value={val} label={val}/>
        })}
      </RadioGroup>
    </FormControl>
  );
}
