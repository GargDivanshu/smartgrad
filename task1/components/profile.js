import React from 'react'
import {BsLinkedin, BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'


const Profile = () => {
  return (
    <>
    <div className="max-w-[900px] mx-auto rounded-md border-gray border-[1px]">
    <div className="relative">
        <div className="bg-lightskyblue  rounded-t-md max-h-[175px] h-[175px]">
        </div>
        <img
        src="data:image/jpeg;base64,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"
            className="object-cover w-[120px] absolute h-[120px] rounded-full transform translate-x-1/12 mx-[63px] -translate-y-1/2"
        />
        </div>
        <div className=" flex flex-col">
        <div className="pl-[220px] text-darkblue text-lg font-medium ">
        Julia Barreto
        </div>
        <div className="pl-[220px] font-normal text-[15px] text-darkgray">
        Building TeenFounders
        </div>
        </div>

        <div className="mt-4 p-2 border-b-[1px] border-b-gray max-w-[850px] mx-auto text-[14px] font-medium text-skyblue">
          Overview
        </div>
        <div className="flex">
        <div className="flex flex-col w-3/5 p-2 mt-2">
           <div className="font-normal text-[15px] text-darkgray mx-4 px-4">
           I come with experience in different fields of marketing, that includes
social media marketing, influencer marketing and experiential
marketing.
           </div>
           <div className="mx-4 px-4 text-linkedinblue my-3">
               <BsLinkedin
                fontSize={25}
                
               />
           </div>

           <div className="mx-4 px-4 my-6 font-medium text-sm text-darkgray">
            Skills
           </div>

           <div className="mx-4 px-2 grid grid-cols-2 justify-around max-w-[325px]">
           <div className="my-2 col-auto text-[13px] border-[1px] border-gray text-darkgray rounded-md text-center max-w-fit px-2 font-normal">
           Entrepreneurship
           </div>
           <div className="my-2 col-auto text-[13px] border-[1px] border-gray text-darkgray rounded-md text-center max-w-fit px-2 font-normal">
           Community Building
           </div>
           <div className="m-2 col-auto text-[13px] border-[1px] border-gray text-darkgray rounded-md text-center max-w-fit px-2 font-normal">
           Social Media Marketing
           </div>
           
           </div>

        </div>
        <div className="grid w-2/5 p-2 border-l-[1px] border-l-gray mt-2">
          <div className="pl-3 min-h-fit py-2">
          <h1 className="max-h-fit py-2 text-sm font-semibold text-darkgray">
            Pick a Date
            </h1>

            <div className="flex flex-row">
               <BsArrowLeftCircle
                className="my-auto mx-2 text-darkgray" fontSize={25}
               />
                   <div className="rounded-md mx-2 bg-[#E7EBF1] border-gray border-[1px] p-2">
                     <h1>
                      Thu
                     </h1>
                     <h1>
                      30 Mar
                     </h1>
                   </div>

                   <div className="rounded-md mx-2 border-gray border-[1px] p-2">
                     <h1>
                      Thu
                     </h1>
                     <h1>
                      30 Mar
                     </h1>
                   </div>

                   <div className="rounded-md mx-2 border-gray border-[1px] p-2">
                     <h1>
                      Thu
                     </h1>
                     <h1>
                      30 Mar
                     </h1>
                   </div>

               <BsArrowRightCircle
                className="my-auto mx-2 text-darkgray" fontSize={25}
               />
            </div>
          </div>


          <div>
          <h1 className="pl-3 max-h-fit py-2 text-sm font-semibold text-darkgray ">
            Pick a Time
            </h1>

            <div className="flex flex-row">
         
                   <div className="ml-16 rounded-md mx-2 border-gray border-[1px] p-2">
                   <h1>
                      3:00
                     </h1>
                   </div>

                   <div className="rounded-md mx-2 border-gray border-[1px] p-2">
                     <h1>
                      6:00
                     </h1>
                     
                   </div>

                 

            </div>
          </div>

        </div>
          
        </div>
    </div>
    
    </>
  )
}

export default Profile