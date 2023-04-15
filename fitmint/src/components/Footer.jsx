import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#fff] pt-[158px]">
        <div className="w-full relative  h-screen bg-center bg-[url('https://fitmint.io/v2/footer_illustration_desktop.svg')] bg-cover bg-no-repeat">
           
           <div className="absolute mt-[190px]">
             <img 
             className="h-[186px] aspect-auto"
                src="https://fitmint.io/v2/clouds.png"
             />
           </div>

           <div className="absolute bottom-0">

           </div>
        </div>
    </div>
  )
}

export default Footer