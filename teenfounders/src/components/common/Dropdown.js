import React from 'react'
import { ClassValue } from 'clsx';



const Dropdown = ({text, options}) => {

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };
  
  return (
    <>
    {/* <label >Choose a car:</label> */}

    <select className="w-full h-[34px] rounded-md outline-none border-[1px] border-lightgray text-[0.875rem] font-[400]">
    <option value="none"
    className="text-[0.875rem] font-[400] py-[11px] px-[15px] text-lightgray"
     selected disabled hidden>{text}</option>
      {/* <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option> */}

     { options.map((item) => 
        <option 
        className="h-[36px] my-auto hover:bg-lightgrayBg "
        value={item}>{item}</option>
      )}
    </select>
    </>
  )
}

export default Dropdown