import React from 'react'

const AnsCard = () => {
    return (

        <>
    
        <div className="flex justify-between px-[270px] border-b-[1px] border-gray mb-12 py-4">
        <div className="flex">
            <button className="rounded-3xl border-[1px] text-base font-semibold px-5 py-2 mr-3 border-gray ">
              Pending
            </button>
        </div> 
    <div className="rounded-3xl my-2 text-base font-thin px-3 min-h-fit mr-3 bg-gray text-darkgray">
       pytorch
    </div>
            <button className="rounded-3xl border-[1px] text-base font-semibold px-5 py-2 mr-3 bg-lightskyblue text-skyblue border-gray ">
               Create a query
            </button>
    
    
        </div>
    
    
        <div className="rounded-xl mx-auto border-[1px] max-w-[691px] max-h-fit mb-12 text-lg w-full border-gray">
          
           <div className="flex">
            {/* <Image
                src=
            /> */}
            <div className="flex mt-6">
              <div className="rounded-full w-[75px] h-[75px] mx-6 bg-gray">
              <img
                className="my-auto "
              />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[18px] font-semibold text-darkblue">
                Julia Barreto
                </h1>
                <h1 className="text-[15px] py font-normal text-darkgray">
                Building TeenFounders
                </h1>
                <h1 className="text-[13px] py font-normal text-darkgray">
                Halifax, Nova Scotia, Canada
                </h1>

              </div>
              </div>


              <div className="mt-6 flex justify-end w-full max-w-[380px]">
                <button className="text-base font-base rounded-3xl h-[40px] w-[100px] mx-4 px-3 bg-skyblue text-white ">
                    Accept
                </button>
              </div>
           </div>

           <div className="grid grid-cols-4 max-w-[900px] px-12 py-6">
              <div className="border-[1px] mx-2 border-gray text-[13px] text-darkgray rounded-lg text-center">
              Entrepreneurship
              </div>

              <div className="border-[1px] mx-2 border-gray text-[13px] text-darkgray rounded-lg text-center">
              Entrepreneurship
              </div>

              <div className="border-[1px] mx-2 border-gray text-[13px] text-darkgray rounded-lg text-center">
              Entrepreneurship 
              </div>
           </div>

           <div className="max-w-[600px] mx-auto  text-[15px] text-darkgray">
I can understand your problem that two of your Co-founders who are not serious and don’t care much are demanding equal salaries as the CEO and CTO(you). I can suggest you a way on how you can rule out your 3rd and 4th Cofounders from the board of directors & guide you to comply on the equity and salary part.
           </div>
    <div className="mt-8 rounded-b-md py-2 max-w-full bg-lightskyblue text-[14px] text-[#374457] px-12">
    Looking for help with leadership equity
    </div>


        </div>
    
        </>
      )
}

export default AnsCard