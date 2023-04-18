import React from 'react'
import {BsLink45Deg, BsCalendarMinus, BsClock, BsPeople, BiSignal3} from 'react-icons/bs'
import {AiOutlineAppstore, AiOutlinePlus} from 'react-icons/ai'
import {ImPower} from 'react-icons/im'
import {CiSettings} from 'react-icons/ci'
import Link  from 'next/link';


const Button = ({icon, text, link}) => {
  return (
    <Link
    href={link}
    >
    <button 
    className="w-[177px] my-1 mx-auto hover:bg-lightgrayBg text-[14px] focus:bg-[#E5E7EB] flex h-[36px] rounded-md my[1px]"
    >
      <img src={icon} 
        className="w-[25px] my-auto h-[25px] p-1"
      /> 
        

      <span className="text-btntextgray my-auto">{text}</span>
    </button>
    </Link>
  )
}

export default Button