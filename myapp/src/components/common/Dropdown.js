import React from 'react'

const Dropdown = ({text, options}) => {
  return (
    <div className="my-[20px]">

    <h1>
      {text}
    </h1>


    <label for="cars"></label>

<select 
className="w-full border-[1px] border-lightgray rounded-md p-[8px]"
name="cars" id="cars">
{
  options.map((item) => (
    <option 
    className="p-[8px] hover:bg-lightgrayBg"
    value={item}>
    <span
    className="my-2"
    >{item}</span>
    </option>
  ))
}
  {/* <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option> */}
</select>

</div>
  )
}

export default Dropdown