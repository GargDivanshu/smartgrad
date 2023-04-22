import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'


const InstallBtn = () => {
  return (
    <button
    className="min-w-[82px] flex justify-evenly text-[0.875rem] font-[500] text-center hover:bg-searchBargrey hover:border-darkgray min-h-[34px] m-auto rounded-md border-[1px] border-gray"
    >
      <AiOutlinePlus 
      fontSize={15}
      className="my-auto"
      />
      <span className="my-auto">Install</span>
    </button>
  )
}

export default InstallBtn