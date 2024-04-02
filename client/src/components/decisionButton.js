import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function DecisionButtons() {
  return (
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" className="radio-buttons-label"/>
        <FormControlLabel value="male" control={<Radio />} label="No"  className="radio-buttons-label"/>
      </RadioGroup>
  );
}