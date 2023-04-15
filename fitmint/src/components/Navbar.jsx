import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-[#FAEBD1] to-transparent h-[158px] w-full">
    <div className="mx-auto h-[84px] w-[768px] flex justify-between relative " >
       <div className="mb-0 absolute bottom-0" >
         <img 
            src="https://fitmint.io/v2/logo.svg"
            className="aspect-auto"
         />
       </div>


       <div className="absolute hover:text-black text-[#646059] bottom-0 right-0 hover:bottom-1 duration-100 ease-out">
       origin pass
       </div>
    </div>
    </div>
  )
}

export default Navbar