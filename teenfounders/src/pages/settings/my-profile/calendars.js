import React from 'react'
import Sider from './../../../components/Sider';
import Profilesider from './../../../components/Profilesider';
import Button from './../../../components/common/Button';
import Input from './../../../components/common/Input';
import {BsCalendarMinus} from 'react-icons/bs'



const Calendars = () => {
  return (
    <main className="min-h-screen flex bg-white w-full">
    
    <Profilesider/>

    <div
    className="w-full max-w-[995px] mx-auto lg:pl-[227px] px-[135px] pt-[80px] pb-[32px]"
    >

<div className="flex justify-between border-b-[1px] border-lightgray">
    <div className="">
     <h1
     className="w-full justify-start text-[1.25rem] text-darkblue font-bold"
     >Calendars</h1>
     <h1
     className="text-[14px] text-btntextgray pb-[25px] "
     >
     Configure how your event types interact with your calendars
     </h1>
</div>

<button className="w-[143px] h-[34px] rounded-md border-[1px] border-lightgray mt-1 hover:border-btntextgray">
+ Add Calendar
</button>
</div>

   


    
   

    <div className="w-[766px] h-[387px] border-dotted border-[1px] border-gray rounded-md my-[32px]">
       
       <div className="w-[67px] h-[67px] bg-[#E5E7EB] rounded-full mt-[90px] mx-auto">
        <BsCalendarMinus
        fontSize={45}
            className="m-auto pt-4 text-[#374151]"
        />
       </div>

       <h1 className="text-[18px] text-[#111827] font-bold text-center mt-[22px] mb-[16px]">
       No calendar installed
       </h1>

       <h1
       className="text-[14px] text-[#374151] text-center"
       >You have not yet connected any of your calendars</h1>

        <div className="flex justify-center mt-[35px]">
       <button className="text-white bg-[#292929] rounded-md w-[132px] h-[36px]">
         Add a calendar
       </button>
       </div>
    </div>


    </div>



   
    </main>
  )
}

export default Calendars