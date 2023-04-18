import React from 'react'
import Sider from './../../../components/Sider';
import Profilesider from './../../../components/Profilesider';
import Button from './../../../components/common/Button';
import Input from './../../../components/common/Input';
import LabelInput from './../../../components/common/LabelInput';
import {AiOutlineDelete} from 'react-icons/ai'
import MenuBar from './../../../components/common/MenuBar';


const Profile = () => {
  return (
    <main className="min-h-screen flex bg-white w-full">
    
    <Profilesider/>

    <div
    className="w-full max-w-[995px] ml-[227px] px-[135px] pt-[100px] pb-[32px]"
    >
     <h1
     className="w-full justify-start text-[18px] text-darkblue font-bold"
     >Profile</h1>
     <h1
     className="text-[15px] text-btntextgray pb-[25px] border-b-[1px] border-lightgray"
     >
     Manage settings for your Cal.com profile
     </h1>


     <div className="flex py-[32px]">
      <img 
      className="w-[67px] h-[67px] rounded-full"
        src="https://app.cal.com/teenfounders/avatar.png"
      />
      {/* <Button/> */}

      <button 
        className="w-[130px] h-[32px] rounded-md border-[1px] my-auto font-semibold mx-[16px] border-lightgray"
      
      >
      Change Avatar
      </button>
     </div>


     <div>

    <div className="flex">
    <span className="w-[79px] h-[34px] rounded-l-md border-[1px] border-lightgray bg-[#f9fafb] text-center pt-1  text-[14px] text-[#94958F]">
    cal.com/
    </span>
   <input 
    className="w-full mb-[2px] py-[11px] px-[15px] font-light border-[1px] border-lightgray rounded-r-md h-[34px] border-l-0 focus:outline-none"
   />
   </div>
   </div>

     <LabelInput 
      text="Full name"
     />


     <LabelInput
      text="Email"
     />
     <h1
     className="text-btntextgray text-[0.875rem]"
     >You may need to log out and back in to see any change take effect</h1>
    

    <h1 className="mt-[30px] text-[0.875rem] mb-[10px]">
      About
    </h1>
    <div className="h-96px ">
    <MenuBar
      placeholder="Tell us a little about yourself"
    />
</div>

    <div 
    className=" border-b-[1px] border-lightgray"
    >
    <button
    className="bg-[#eaeaea] text-[14px] hover:cursor-not-allowed text-[#9999] w-[81px] h-[35px] rounded-md my-[23px]" 
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

export default Profile