import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Button from './button';
import { button } from './../utils/button';

const Sider = () => {
  return (
    <div
    className="w-full min-h-fit h-screen mt-6 mx-auto overflow-y-scroll"
    >
      <div
      className="flex w-11/12 mx-auto justify-between"
      >
         <img src="https://app.cal.com/calcom-logo-white-word.svg" 
         className="w-[75px] aspect-auto"
         alt="logo" />
         <AiOutlineSearch
          fontSize={25}
         />
      </div>
<div>
      {
        button.map((item) => (
          <Button
          key={item.title}
            logo={item.logo}
            title={item.title}
          />
        ))
      }
      </div>

      <div className="rounded-md border-[1px] border-gray w-4/5 mx-auto p-1">
          <h1 className="text-sm text-center font-semibold py-2 mx-auto">
          Dynamic booking links
          </h1>

          <h1 className="text-xs text-darkgray mx-auto w-11/12">
          Booking link that allows people to quickly ...
          </h1>

          <video className="w-11/12 rounded-md my-2 mx-auto" controls
          src="https://www.youtube.com/watch?v=60HJt8DOVNo"
          />

          <div className="text-xs w-11/12 mx-auto">
            Learn more
          </div>


      </div>
    </div>
  )
}

export default Sider