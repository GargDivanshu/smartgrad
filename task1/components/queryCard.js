import React from 'react'
import { Image } from 'next/image';

const QueryCard = () => {
  return (

    <>

    <div className="flex justify-between px-[270px] border-b-[1px] border-gray mb-12 py-4">
    <div className="flex">
        <button className="rounded-3xl border-[1px] text-base font-semibold px-5 py-2 mr-3 border-gray ">
          Pending
        </button>

        <button className="rounded-3xl border-[1px] text-base font-semibold px-5 py-2 mr-3 bg-skyblue text-white border-gray ">
          Answered
        </button>
    </div> 

        <button className="rounded-3xl border-[1px] text-base font-semibold px-5 py-2 mr-3 bg-lightskyblue text-skyblue border-gray ">
           Create a query
        </button>


    </div>


    <div className="rounded-xl mx-auto border-[1px] max-w-[691px] max-h-[235px] text-lg w-full border-gray">
       <h1 className="my-8 mx-12 text-darkblue font-semibold">
       I need some advice to switch my role to data engineer
       </h1>
       <div className="flex">
        {/* <Image
            src=
        /> */}
          <div className="rounded-full w-[45px] h-[45px] mx-12 bg-gray">
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold text-darkblue">
                Sanjana
            </h1>
            <h1 className="text-xs py-1 font-normal text-darkgray">
                Data Engineer at Microsoft
            </h1>
          </div>
       </div>

       <div className="grid grid-cols-4 ml-12 my-8">
         <div>
            <h1 className="font-medium text-xs text-darkgray">
            18 March, 23
            </h1>
            <div className="text-darkblue py-1 text-sm font-semibold">
            15:00 - 15:15
            </div>
         </div>

         <div>
            <h1 className="font-medium text-xs text-darkgray">
            Duration
            </h1>
            <div className="text-darkblue py-1 text-sm font-semibold">
                15 mins
            </div>
         </div>

         <div>
            <h1 className="font-medium text-xs text-darkgray">
                Cost
            </h1>
            <div className="text-darkblue py-1 text-sm font-semibold">
                Rs. 200
            </div>
         </div>

         <div>
            <h1 className="font-medium text-xs text-darkgray">
                Feedback
            </h1>
            <div className="text-skyblue py-1 text-sm font-semibold">
            Give feedback
            </div>
         </div>


       </div>
    </div>

    </>
  )
}

export default QueryCard