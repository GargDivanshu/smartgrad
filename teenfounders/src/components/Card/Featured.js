import React from 'react'
import {BsArrowRight} from 'react-icons/bs'


const Featured = ({title, featureNo}) => {
  return (
    <div
    className="rounded-lg bg-[url('/noise.jpg')] object-cover bg-no-repeat min-w-[223px] mx-1 p-3 snap-center"
    >
        <div className="font-semibold text-[15px]  px-4">   
            {title}
        </div>
        <div className="text-[14px] text-darkgray flex px-4 font-semibold">
            {featureNo} Apps <BsArrowRight
                className="my-auto font-bold" fontSize={15}
            />
        </div>
    </div>
  )
}

export default Featured