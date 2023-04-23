import React from 'react'

const Card = ({img, title, level}) => {
  return (
    <div className="border-[2px] border-[#C8C3BC] relative w-[265px] h-[370px] hover:-translate-y-3 duration-300 ease-out my-[20px]">
        <div className={`absolute top-[-7.5px] right-[-10px] px-[10px] py-[5px] font-bold border-[2px] border-black ${
            (level === "Level 1" && "bg-[#BCFF93]") || (level === "Level 2" && "bg-[#FCFF74]") || (level === "Level 3" && "bg-[#FFD430]")
        }`}>
         {level} 
        </div>
       <img 
       src={img}
       className="w-full aspect-auto"
       />

       <div className="border-t-[2px] border-[#C8C3BC] h-[52px] w-full bg-[#452B09] text-[#C8C3BC] underline  DMSerif ">
            <span className="ml-[25px]
            mb-[5px] text-[24px] font-bold">{title}</span>
       </div>
    </div>
  )
}

export default Card