import React from 'react'



const Input = ({text}) => {
  return (
    <div>
    {/* <h1 className="my-[10px]">
      {text}
    </h1> */}
   <input 
   placeholder={text}
    className="w-full text-[0.875rem] focus:outline-none mb-[2px] py-[11px] px-[15px] font-[400] border-[1px] border-lightgray rounded-md h-[34px]"
   />
   </div>
  )
}

export default Input