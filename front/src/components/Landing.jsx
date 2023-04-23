import React from 'react'

const Landing = () => {
  return (
    <div className="border-b-[2px] pt-[100px] border-black max-w-screen mx-auto flex flex-col sm:flex-row justify-center">
      
      <div className="mx-[30px] my-[60px] max-w-[600px]">
         <h1 className="text-[33px] sm:text-[55px] DMSerif font-bold leading-[55px] sm:leading-[48px]">Become a better frontend developer.</h1>

         <p className="my-[10px] text-[23px] font-[400]">Take your frontend skills to the next level by recreating <span className="font-bold">real websites</span> from <span className="font-bold">real companies.</span></p>

         <p className="my-10px] text-[23px] font-[400]">The perfect type of practice for developers of all skill levels. Are you up for the challenge?</p>

         <div className="flex">
           <button className="mr-1 border-[2px] bg-white border-black hover:bg-black px-[15px] font-[600] duration-200 ease-in py-[10px] hover:text-white">
              View Projects
           </button> 

           <button className="ml-1 border-[2px] bg-transparent border-black hover:bg-black px-[15px] font-[600] duration-200 ease-in py-[10px] hover:text-white">
               Learn More
           </button>
         </div>
      </div>

      <div className="mx-[30px] my-[60px] max-w-[600px]">
       <img 
       className="hidden sm:flex my-auto"
       src="https://www.frontendpractice.com/_next/image?url=%2Fproject-collage.png&w=3840&q=100"
       />
      </div>

    </div>
  )
}

export default Landing