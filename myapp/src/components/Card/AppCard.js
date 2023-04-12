import React from 'react'
import Button from './../common/Button';
import InstallBtn from './../common/InstallBtn';
import Details from './../common/Details';
import { app } from './../../utils/app';
import { useRouter } from 'next/router'

const AppCard = ({logo, name, text, width, height, padding}) => {
    const router = useRouter()

    function truncateString(str, num) {
        if (str.length <= num) {
          return str;
        }
        return str.slice(0, num) + '...';
      }

      const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
      }


  return (
    <div
    className={`min-w-[${width}] p-[20px] min-h-[${height}] rounded-md border-lightgrayBg border-[1px]`}
    key={name}
    >
        <img 
            src={logo}
            className="w-[47px] h-[47px] mb-[16px]"
        />

        <div
        className="text-[17px]"
        >
            {name}
        </div>

        <h1
        className="text-[15px] min-h-[62px] mt-[8px] mb-[20px] text-btntextgray"
        >
        {truncateString(text, 60)}
        </h1>

        <div className="flex">
           <Details/>

           <InstallBtn/>
        </div>
    </div>
  )
}

export default AppCard