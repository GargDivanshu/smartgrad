import React from 'react'
import Sider from './../../../components/Sider';
import Profilesider from './../../../components/Profilesider';
import Button from './../../../components/common/Button';
import Input from './../../../components/common/Input';
import {AiOutlineDelete} from 'react-icons/ai'
import {SlOptions} from 'react-icons/sl'


const Conferencing = () => {
  return (
    <main className="min-h-screen flex bg-white w-full">
    
    <Profilesider/>

    <div
    className="w-full max-w-[995px] mx-auto lg:pl-[227px] px-[135px] pt-[100px] pb-[32px]"
    >
     <h1
     className="w-full justify-start text-[18px] text-darkblue font-bold"
     >Conferencing</h1>
     <h1
     className="text-[15px] text-btntextgray pb-[25px] border-b-[1px] border-lightgray"
     >
     Manage settings for your language and timezone
     </h1>



    <div className="w-full rounded-md my-[31px] p-[16px] border-[1px] flex border-lightgray">
      
      <img 
        src="https://app.cal.com/api/app-store/dailyvideo/icon.svg"
        className="w-[39px] h-[39px] rounded-md"
      />

      <div className="mx-[10px]">
         <div className="flex ">
            <h1>Cal Video</h1>
            <div className="bg-[#E2FBE8] text-[#285231] rounded-md mx-[8px] text-[12px] px-[4px] py-[1px] pt-1 text-center">
                Default
            </div>
         </div>

         <h1 className="text-[14px] text-[#6B7280] ">
         Cal Video is the in-house web-based video conferencing platform powered by Daily.co, which ...
         </h1>


      

      </div>
      <button className="w-[39px] h-[39px] border-[1px] border-lightgray rounded-md ">
               <SlOptions
                className="m-auto"
               />
      </button>

    </div>



    </div>



   
    </main>
  )
}

export default Conferencing