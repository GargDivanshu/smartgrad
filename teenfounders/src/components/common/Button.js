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
    className="w-[177px] mx-auto hover:bg-lightgrayBg focus:bg-[#E5E7EB] flex h-[36px] rounded-md my[1px]"
    >
      <img src={icon} 
        className="w-[30px] my-auto h-[30px] p-1"
      /> 
        

      <span className="text-btntextgray my-auto">{text}</span>
    </button>
    </Link>
  )
}

export default Button