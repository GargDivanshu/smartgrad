import React from 'react'
import SearchBar from './../common/SearchBar';
import{AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import AppCard from './../Card/AppCard';
import { app } from './../../utils/app';


const Mainscreen = () => {
  return (
    <div
    className="w-full ml-[227px] px-[48px] pt-[40px]"
    >

        <div className="flex justify-between">
            <div className="flex flex-col">
              <h1
              className="text-[20px] font-bold text-darkblue"
              >App Store</h1>
              <h1
              className="text-btntextgray text-[15px]"
              >Connecting people, technology and the workplace.</h1>
            </div>

            <SearchBar
              className="text-gray"
            />
        </div>

        <div
        className="mt-[40px] mb-[25px] flex justify-between"
        >
          <h1
          className="text-[16px] font-semibold text-darkblue"
          >Featured Categories</h1>

          <div className="flex my-auto">
            <AiOutlineArrowLeft
              className="mx-[10px] text-btntextgray"
              fontSize={17}
            />

            <AiOutlineArrowRight
              className="mx-[10px] text-btntextgray"
              fontSize={17}
            />
          </div>

        </div>


        <div
        className="mt-[40px] mb-[25px] justify-between"
        >
        <h1
          className="text-[16px] font-semibold text-darkblue"
          >Most Popular</h1>


<div className="grid grid-cols-4 gap-2">
          {
            app.map((item) => (
              <AppCard
                logo={item.logo}
                name={item.name} 
                text={item.text}
                width={item.width}
                height={item.height}
                padding={item.padding}
              />
            ))
          }

          </div>
        </div>

        

    </div>
  )
}

export default Mainscreen