import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] z-30 fixed top-0 px-3 border-black w-full max-h-fit min-h-[61px] flex justify-between border-b-[2px] ">
     <p className="hover:underline DMSerif font-[600] text-[30px] my-auto">Frontend Practice</p> 

     <div className="my-auto">
        <ul className=" flex justify-between">
            <li className="hover:underline mx-[15px] text-[18px] font-[600]">Home</li>

            <li className="hover:underline mx-[15px] text-[18px] font-[600]">Projects</li>

            <li className="hover:underline mx-[15px] text-[18px] font-[600]">Blog</li>
 
            <li className="hover:underline mx-[15px] text-[18px] font-[600]">FAQ</li>

            <li className="hover:underline mx-[15px] text-[18px] font-[600]">Contact</li>

            <li className="hover:underline mx-[15px] text-[18px] font-[600]">Newsletter ↗</li>
        </ul>
     </div>  
    </div>
  )
}

export default Navbar