import React from 'react'



const LabelInput = ({text, children}) => {
  return (
    <>
    {
      children
    }
    <div className="my-[30px] ">
    <h1 className="my-[5px] text-[0.875rem] font-[500]">
      {text}
    </h1>
   <input 
   placeholder={text}
    className="w-full text-[0.875rem] focus:outline-none mb-[2px] py-[11px] px-[15px] font-[400] border-[1px] border-lightgray rounded-md h-[34px]"
   />
   </div>
   </>
  )
}

export default LabelInput