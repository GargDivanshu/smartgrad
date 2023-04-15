import React from 'react'
import {useRouter} from 'next/router'


const TextBtn = ({text, link}) => {
  const router = useRouter()

  
  return (
    <button
    onClick={() => (router.push(`${link}`))}
    className="min-w-[82px] text-center hover:bg-searchBargrey hover:border-darkgray min-h-[34px] my-auto rounded-md border-[1px] border-gray"
    >
     {text}
    </button>
  )
}

export default TextBtn