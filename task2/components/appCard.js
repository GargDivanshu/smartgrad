import React from 'react'

const AppCard = ({logo, title, desc}) => {

    function truncateString(str, num) {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      }


  return (
    <div className="rounded-md m-1 border-[1px] border-gray h-[250px]">
      <img className="m-5 w-[50px] h-[50px]"
        src={logo}
      />
      <h1 className="px-5 mx-auto text-[15px] font-semibold">
            {title}
      </h1>
      <h1
      className="h-[71px] px-5 mx-auto text-[14px] py-2 text-darkgray"
      >
        {truncateString(desc, 90)}
      </h1>
      <button className="p-2 border-[1px] hover:border-black border-gray rounded-md w-4/5 block mt-6 m-auto text-center text-[14px]"> 
          Details
      </button>
    </div>
  )
}

export default AppCard