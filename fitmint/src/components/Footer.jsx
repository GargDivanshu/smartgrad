import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {BsDiscord, BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className="bg-[#fff] pt-[158px]">
        <div className="w-full relative  h-screen bg-center bg-[url('https://fitmint.io/v2/footer_illustration_desktop.svg')] bg-cover bg-no-repeat">
           
           <div className="absolute mt-[190px] flex">
             <img 
             className="h-[186px] aspect-auto waves"
                src="https://fitmint.io/v2/clouds.png"
             />

            <img 
             className="h-[186px] aspect-auto waves left-[200px]"
                src="https://fitmint.io/v2/clouds.png"
             />

             <img 
             className="h-[186px] aspect-auto waves left-[300px]"
                src="https://fitmint.io/v2/clouds.png"
             />

             <img 
             className="h-[186px] aspect-auto waves left-[500px]"
                src="https://fitmint.io/v2/clouds.png"
             />
           </div>
           
           <div className="absolute bottom-0 left-px w-full h-[280px] mx-auto">
               <div className="mx-auto w-[260px] h-full">
                   
                   <div className="pt-[45px]">
                   <img 
                   className="mx-auto "
                    src="fitmint.svg"
                   />
                   </div>
                   <div className="flex justify-between mx-16 my-9">
                       <h1 className="text-[#646059]  text-[12px] font-bold hover:text-white">contact</h1>

                       <h1 className="text-[#646059] text-[12px] font-bold hover:text-white">origin pass</h1>
                   </div>

                   <div className="flex justify-between m-2">
                     <AiFillInstagram
                      fontSize={25}
                      className="text-white"
                     />

                     <BsDiscord
                      fontSize={25}
                      className="text-white"
                     /> 

                     <BsTwitter
                      fontSize={25}
                      className="text-white"
                     />

                     <FaTelegramPlane
                      fontSize={25}
                      className="text-white"
                     />
                   </div>

                   <div className="text-[#646059] mt-6 text-[12px] font-bold">
                   © fitmint • all rights reserved • privacy policy
                   </div>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Footer