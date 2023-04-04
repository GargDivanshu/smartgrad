import React from 'react'

const PopularCard = ({logo, title, desc}) => {
    return (
        <div className="min-w-[378px] rounded-md m-1 border-[1px] border-gray h-[250px]">
        <img className="m-5 w-[50px] h-[50px]"
          src={logo}
        />
        <h1 className="px-5 mx-auto text-[15px] font-semibold">
              {title}
        </h1>
        <h1
        className="h-[63px] px-5 mx-auto text-[14px] py-2 text-darkgray"
        >
          {desc}
        </h1>
        <button className="p-2 hover:border-black border-[1px] border-gray rounded-md w-11/12 block mt-6 m-auto text-center text-[14px]"> 
            Details
        </button>
      </div>
      )
}

export default PopularCard