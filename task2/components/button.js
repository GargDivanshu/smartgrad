import React from 'react'



const Button = ({logo, title}) => {
  return (
    <div className="flex m-3 rounded-md p-2 px-2 hover:bg-bggray cursor-pointer">
       <span
       className="mr-4"
       >{logo}</span>
       

       <span
       className="text-darkgray text-sm"
       >{title}</span>
    </div>
  )
}

export default Button