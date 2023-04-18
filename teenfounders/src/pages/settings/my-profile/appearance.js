import React from 'react'
import Sider from './../../../components/Sider';
import Profilesider from './../../../components/Profilesider';
import Button from './../../../components/common/Button';
import Input from './../../../components/common/Input';
import {AiOutlineDelete} from 'react-icons/ai'
import {SlOptions} from 'react-icons/sl'


const Appearence = () => {

  const [lightTheme, setLightTheme] = React.useState(292929)
  const [darkTheme, setDarkTheme] = React.useState('fafafa')


  return (
    <main className="min-h-screen flex bg-[#ffff] w-full">
    
    <Profilesider/>

    <div
    className="w-full max-w-[995px] mx-auto lg:pl-[227px] px-[135px] pt-[100px] pb-[32px]"
    >
     <h1
     className="w-full justify-start text-[1.25rem] text-darkblue font-bold"
     >Appearence</h1>
     <h1
     className="text-[0.875rem] text-btntextgray pb-[25px] border-b-[1px] border-lightgray"
     >
     Manage settings for your language and timezone
     </h1>



    <div className="w-full my-[31px] p-[16px] border-b-[1px] border-lightgray pb-[30px] ">
      
      <h1 className="text-[14px] text-[#374151] font-semibold">
      Theme
      </h1>

      <h1 className="text-[14px] font-light text-[#374151]">
      This only applies to your public booking pages
      </h1>


      <div className="grid grid-cols-3 gap-2">
      <div>
         <button 
         className="h-[121px] w-[223px] rounded-md bg-contain bg-[url('https://app.cal.com/theme-system.svg')]"
          src=""
         >
         </button>

         <h1 className="text-center text-[14px] ">
         System default
         </h1>
      </div>



      <div>
         <button 
         className="h-[121px] w-[223px] rounded-md bg-contain bg-[url('https://app.cal.com/theme-light.svg')]"
        
         >
         </button>
<h1 className="text-center text-[14px]">
Light
         </h1>
      </div>  


<div>
         <button 
         className="h-[121px] w-[223px] bg-contain rounded-md bg-[url('https://app.cal.com/theme-dark.svg')]"
        >
        </button>

         <h1 className="text-center text-[14px]">
         Dark
         </h1>


         </div>
      </div>

      

    </div>

    <div className="w-full my-[31px] p-[16px] border-b-[1px] border-lightgray pb-[30px] ">
      
      <h1 className="text-[14px] text-[#374151] font-semibold">
      Custom brand colors
      </h1>

      <h1 className="text-[14px] font-light text-[#374151]">
      Customize your own brand colour into your booking page.
      </h1>


      <div className="flex justify-between mt-[35px]">
           <div>
              <h1 className="text-[14px] text-[#374151] mb-[12px]">
              Brand Color (Light Theme)
              </h1>

              <div className="flex rounded-md border-[1px] border-gray px-[6px]">
                 <div className="w-[33px] py-2 mx-1 h-full m-auto border-r-[1px] border-gray">
                    <div className={`w-[19px] h-[20px] rounded-sm bg-[#${lightTheme}]`}>
                    </div>
                 </div>

                    <input 
                    className="mx-[12px] text-black focus:outline-none"
                      // placeholder={`${lightTheme}`}
                      value={lightTheme}
                      onChange={(e) => setLightTheme(e.target.value)}
                    />
              </div>


           </div>

           <div>
           <h1 className="text-[14px] text-[#374151] mb-[12px]">
           Brand Color (Dark Theme)
              </h1>

              <div className="flex rounded-md border-[1px] border-gray px-[6px]">
                 <div className="w-[33px] py-2 mx-1 h-full m-auto border-r-[1px] border-gray">
                    <div className={`w-[19px] h-[20px] rounded-sm bg-[#${darkTheme}]`}>
                    </div>
                 </div>

                    <input 
                    className="mx-[12px] text-black focus:outline-none"
                      // placeholder={`${lightTheme}`}
                      value={darkTheme}
                      onChange={(e) => setDrakTheme(e.target.value)}
                    />
              </div>
           </div>
      </div>    
      </div>


      <div className="flex justify-between">
        <div className="">
        <div className="flex">  
          <h1 className="text-[14px] text-[#374151] font-semibold">
          Disable Cal.com branding
          </h1>

          <div className="bg-[#F3F4F6] text-[11px] text-center rounded-md px-1 py-[0.5px] pt-[0.5px] mx-[10px]">
          Upgrade
          </div>
        </div>

        <h1 className="text-[14px] font-light text-[#374151]">
        Removes any Cal.com related brandings, i.e. 'Powered by Cal.com.'
        </h1>
        </div>


        <label className="switch hover:cursor-not-allowed" disabled>
  <input type="checkbox hover:cursor-not-allowed" disabled/>
  <span className="slider round hover:cursor-not-allowed" disabled></span>
</label>


      </div>

      <button
    className="bg-[#eaeaea] text-[14px] hover:cursor-not-allowed text-[#9999] w-[81px] h-[35px] rounded-md my-[23px]" 
    disabled
    >
      Update
    </button>
    </div>



   
    </main>
  )
}

export default Appearence