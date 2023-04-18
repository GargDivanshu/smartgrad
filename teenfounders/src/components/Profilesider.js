import React from 'react'
import { Image } from 'next/image';
import {FiKey} from 'react-icons/fi'
import {SlEnvolopeLetter} from 'react-icons/sl'
import {HiCode} from 'react-icons/hi'
import {AiOutlineTeam} from 'react-icons/ai'
import { useRouter } from 'next/router'
import Button from './common/Button';
import Link from 'next/link';
import {BiLeftArrowAlt} from 'react-icons/bi'

const Profilesider = () => {

  const router = useRouter()
  
  return (
    <div
    className="w-[225px] font-[500] pt-[28px] bg-lightwhite overflow-x-hidden overflow-y-auto no-scrollbar h-screen fixed"
    >
    <div>

    <button 
    onClick={() => {
      router.push("/")
    }}
    className="w-full mb-[26px] h-[24px] flex px-[24px] my-auto text-[0.875rem] hover:bg-[#EAEAEA]">
    <BiLeftArrowAlt
    className="my-auto"
      fontSize={20}
    />
       <span className="mx-1 my-auto">Back</span>
    </button>


    <div className="h-[36px] w-full flex">
     <img 
      src="https://app.cal.com/teenfounders/avatar.png"
      className="rounded-full w-[17px] h-[17px] ml-[14px] my-auto"
     />
     <span
     className="my-auto mx-[10px] text-[#374151] text-[0.875rem]"
     >TeenFounders</span>
    </div>

    <button
     onClick={() => {
      router.push("/settings/my-profile/profile")
    }}
     className={`font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto  hover:bg-lightgrayBg rounded-md my-1 ${(router.pathname==="/settings/my-profile/profile") ? "bg-[#E5E7EB]" : ""}`}>
      Profile
    </button>

    <button 
     onClick={() => {
      router.push("/settings/my-profile/general")
    }}
    className={`font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto  hover:bg-lightgrayBg rounded-md my-1 ${(router.pathname==="/settings/my-profile/general") ? "bg-[#E5E7EB]" : ""}`}>
      General
    </button>

    <button 
     onClick={() => {
      router.push("/settings/my-profile/calendars")
    }}
    className={`font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto  hover:bg-lightgrayBg rounded-md my-1 ${(router.pathname==="/settings/my-profile/calendars") ? "bg-[#E5E7EB]" : ""}`}>
      Calendars
    </button>

    <button 
     onClick={() => {
      router.push("/settings/my-profile/conferencing")
    }}
    className={`font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto  hover:bg-lightgrayBg rounded-md my-1 ${(router.pathname==="/settings/my-profile/conferencing") ? "bg-[#E5E7EB]" : ""}`}>
      Conferencing
    </button>

    <button 
     onClick={() => {
      router.push("/settings/my-profile/appearance")
    }}
    className={`font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto  hover:bg-lightgrayBg rounded-md my-1 ${(router.pathname==="/settings/my-profile/appearance") ? "bg-[#E5E7EB]" : ""}`}>
      Appearence
    </button>



    <div className="h-[36px] w-full flex">
     <FiKey
     className="my-auto ml-[14px] "
      fontSize={15}
     />
     <span
     className=" my-auto mx-[10px] text-[#374151] text-[0.875rem]"
     >Security</span>
    </div>

    <button className={`font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto  hover:bg-lightgrayBg rounded-md my-1 ${(router.pathname==="/settings/my-profile/password") ? "bg-[#E5E7EB]" : ""}`}>
      Password
    </button>

    <button className="font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto focus:bg-[#E5E7EB] hover:bg-lightgrayBg rounded-md my-1">
      Two factor Auth
    </button>

    <button className="font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto focus:bg-[#E5E7EB] hover:bg-lightgrayBg rounded-md my-1">
      Impersonification
    </button>

   


    <div className="h-[36px] w-full flex">
     <SlEnvolopeLetter
     className="my-auto ml-[14px] "
      fontSize={15}
     />
     <span
     className="my-auto mx-[10px] text-[#374151] text-[0.875rem]"
     >Billing</span>
    </div>

    <button className="font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto focus:bg-[#E5E7EB] hover:bg-lightgrayBg rounded-md my-1">
      Manage Billing
    </button>



    <div className="h-[36px] w-full flex">
     <HiCode
     className="my-auto ml-[14px] "
      fontSize={15}
     />
     <span
     className="my-auto mx-[10px] text-[#374151] text-[0.875rem]"
     >Developer</span>
    </div>

    <button className="font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto focus:bg-[#E5E7EB] hover:bg-lightgrayBg rounded-md my-1">
      Webhooks
    </button>

    <button className="font-[500] flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto focus:bg-[#E5E7EB] hover:bg-lightgrayBg rounded-md my-1">
      API Keys
    </button>


    <div className="h-[36px] w-full flex">
     <AiOutlineTeam
     className="my-auto ml-[14px] "
      fontSize={15}
     />
     <span
     className="my-auto mx-[10px] text-[#374151] text-[0.875rem]"
     >Teams</span>
    </div>


    <button className="w-full mb-[26px] h-[32px] flex mt-[17px] pt-[4px] px-[24px] my-auto text-[0.875rem] hover:bg-[#EAEAEA]">
    <BiLeftArrowAlt
      fontSize={20}
    />
       <span className="mx-1">Add a Team</span>
    </button>

    <div>

    </div>
 



    </div>



    
    </div>
  )
}

export default Profilesider