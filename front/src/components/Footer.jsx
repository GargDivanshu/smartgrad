import React from 'react'

const Footer = () => {
  return (
    <div className="min-h-[144px] max-h-fit py-[38px] w-full bg-black text-white">
      <h1 className="text-center mb-[10px]">
      Frontend Practice - © 2023
      </h1>

      <div className="font-[600] flex flex-col sm:flex-row mx-auto w-fit mt-[10px]">
        <h1 className="hover:underline mx-[10px]"> 
            Home
        </h1>

        <h1 className="hover:underline mx-[10px]">
        Projects
        </h1>

        <h1 className="hover:underline mx-[10px]">
            Blog
        </h1>

        <h1 className="hover:underline mx-[10px]">
            FAQ
        </h1>

        <h1 className="hover:underline mx-[10px]">
            Contact
        </h1>

        <h1 className="hover:underline mx-[10px]">
        Newsletter ↗
        </h1>
      </div>
    </div>
  )
}

export default Footer