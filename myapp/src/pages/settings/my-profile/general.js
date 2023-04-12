import React from 'react'
import Sider from './../../../components/Sider';
import Profilesider from './../../../components/Profilesider';
import Button from './../../../components/common/Button';
import Input from './../../../components/common/Input';
import {AiOutlineDelete} from 'react-icons/ai'



const General = () => {
  return (
    <main className="min-h-screen flex bg-white w-full">
    
    <Profilesider/>

    <div
    className="w-full max-w-[995px] ml-[227px] px-[135px] pt-[100px] pb-[32px]"
    >
     <h1
     className="w-full justify-start text-[18px] text-darkblue font-bold"
     >General</h1>
     <h1
     className="text-[15px] text-btntextgray pb-[25px] border-b-[1px] border-lightgray"
     >
     Manage settings for your language and timezone
     </h1>



     <div>
    <h1 className="my-[10px]">
      Username
    </h1>
    <div className="flex">
    <span className="w-[79px] h-[34px] rounded-l-md border-[1px] border-lightgray bg-[#f9fafb] text-center pt-1  text-[15px] text-[#94958F]">
    cal.com/
    </span>
   <input 
    className="w-full mb-[2px] py-[11px] px-[15px] font-light border-[1px] border-lightgray rounded-r-md h-[34px] border-l-0 focus:outline-none"
   />
   </div>
   </div>

     <Input 
      text="Full name"
     />


     <Input
      text="Email"
     />
     <h1
     className="text-btntextgray"
     >You may need to log out and back in to see any change take effect</h1>
    
    <div 
    className=" border-b-[1px] border-lightgray"
    >
    <button
    className="bg-[#eaeaea] hover:cursor-not-allowed text-[#9999] w-[81px] h-[35px] rounded-md my-[23px]" 
    disabled
    >
      Update
    </button>
    </div>

    <div>
      <h1
      className="text-[14px] font-semibold pt-[28px]"
      >Danger Zone</h1>

     <button className="py-[6px] px-[8px] mt-[15px] rounded-md flex border-[1px] border-lightgray border-md">
      <AiOutlineDelete
        className="my-auto mr-2"
      />
      <span>Delete Account</span>
     </button>
    </div>


    </div>



   
    </main>
  )
}

export default General