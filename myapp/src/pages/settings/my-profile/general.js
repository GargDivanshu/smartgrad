import React from 'react'
import Sider from './../../../components/Sider';
import Profilesider from './../../../components/Profilesider';
import Button from './../../../components/common/Button';
import Input from './../../../components/common/Input';
import {AiOutlineDelete} from 'react-icons/ai'
import Dropdown from './../../../components/common/Dropdown';



const General = () => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  
  return (
    <main className="min-h-screen flex bg-white w-full">
    
    <Profilesider/>

    <div
    className="w-full mx-auto max-w-[995px] ml-[227px] px-[135px] pt-[100px] pb-[32px]"
    >
     <h1
     className="w-full justify-start text-[18px] text-darkblue font-bold"
     >General</h1>
     <h1
     className="text-[15px] text-btntextgray pb-[25px] border-b-[1px] border-lightgray"
     >
     Manage settings for your language and timezone
     </h1>



   

     <Dropdown
      text="Language"
      options={["English", "Hindi", "Marathi"]}
     />

<Dropdown
      text="Timezone"
      options={["Asia/Tehran", "Asia/Baghdad", "Asia/Kolkata", "Asia/Tehran", "Asia/Baghdad", "Asia/Kolkata", "Asia/Tehran", "Asia/Baghdad", "Asia/Kolkata", "Asia/Tehran", "Asia/Baghdad", "Asia/Kolkata", "Asia/Tehran", "Asia/Baghdad", "Asia/Kolkata"]}
     />



<Dropdown
      text="Time format"
      options={["12 hour", "24 hour"]}
     />
     <h2> 
     This is an internal setting and will not affect how times are displayed on public booking pages for you or anyone booking you.
     </h2>
   
   <button
    className="bg-[#eaeaea] hover:cursor-not-allowed text-[#9999] w-[81px] h-[35px] rounded-md my-[23px]" 
    disabled
    >
      Update
    </button>


   


    </div>



   
    </main>
  )
}

export default General