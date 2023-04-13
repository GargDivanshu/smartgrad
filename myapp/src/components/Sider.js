import React from 'react'
import { Image } from 'next/image';
import {AiOutlineSearch} from 'react-icons/ai'
import { siderBtn } from './../utils/siderBtn';
import Button from './common/Button';
import Link from 'next/link';


const Sider = () => {

  
  
  return (
    <div
    className="w-[225px] pt-[28px] px-[24px] bg-lightwhite overflow-x-hidden overflow-y-scroll h-screen fixed"
    >
    <div>
    <div className="w-full justify-between flex mb-[50px]">
        <img 
        className="w-[74px] aspect-auto"
            src="https://app.cal.com/calcom-logo-white-word.svg"
            alt="cal.com"
        />
 <AiOutlineSearch
          fontSize={20}
         />
    </div>


    {
        siderBtn.map((item) => (
            <Button 
                icon={item.icon}
                text={item.text}
                link={item.href}
            />
        ))
    }
    </div>


    <div className="rounded-md border-[1px] mt-[38px] mx-auto border-gray w-[160px] p-1">
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