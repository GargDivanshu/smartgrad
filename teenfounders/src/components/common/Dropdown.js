import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const Dropdown = ({text, options}) => {

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };
  
  return (
    <div className="">


    <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={text}
        label={text}
        // onChange={handleChange}
      >

      {
        options.map((item) => (
          <MenuItem value={item}>
          <em>{item}</em>
        </MenuItem>
        ))
      }

      </Select>
       

</div>
  )
}

export default Dropdown