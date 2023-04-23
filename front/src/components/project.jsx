import React from 'react'
import Card from './Card';
import AllCards from './AllCards';

const Project = () => {
  return (
    <div className="py-[70px]">
    <h1 className="text-center text-[72px] font-bold DMSerif">Project Library</h1>

    <h1 className="DMSerif font-bold text-center my-[17px] underline text-[1.62rem]">How to get Started:</h1>
    <div className="w-fit mx-auto">
      <p className="py-[12px] text-[1.3rem] font-[500]">→  Choose one of our projects below.</p>

      <p className="py-[12px] text-[1.3rem] font-[500]">→  Recreate all or parts of the page.</p>

      <p className="py-[12px] text-[1.3rem] font-[500]">→  Improve and test your skills.</p>

      <p className="py-[12px] text-[1.3rem] font-bold">✔   Become a better frontend developer.</p>
    </div>

    <div className="w-fit mx-auto">
      <div className="w-fit grid grid-cols-4 gap-2">
          <button className="px-[15px] font-[600] duration-200 ease-in py-[10px] border-[2px] border-black bg-black text-white">
            View All
          </button>

          <button className="px-[15px] font-[600] duration-200 ease-in py-[10px] border-[2px] border-black hover:bg-[#BCFF93]">
            Level 1
          </button>

          <button className="px-[15px] font-[600] duration-200 ease-in py-[10px] border-[2px] border-black hover:bg-[#FCFF74]">
          Level 2
          </button>

          <button className="px-[15px] font-[600] duration-200 ease-in py-[10px] border-[2px] border-black hover:bg-[#FFD430]">
            Level 3
          </button>
      </div>

      <input 
      className="px-[15px] w-full placeholder:text-[#757575] font-[500] duration-200 ease-in py-[10px] border-[2px] border-black my-[15px] text-[18px]"
      placeholder="Search for project by name: Nintendo"
      />
    </div>

<div className="w-[649px] my-[15px] max-w-[649px] mx-auto">
    <div className="text-center text-[18px] font-bold p-[5px]">
    There are no rules with these projects. Use any languages, libraries, or frameworks you want to recreate and learn from them.
    </div>
    </div>

    <AllCards/>

    
    </div>
  )
}

export default Project