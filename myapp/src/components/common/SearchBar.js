import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'


const SearchBar = () => {
  return (
    <div className="w-[203px] h-[36px] flex bg-searchBargrey rounded-md">
        
        <div  className="w-[53px]"><AiOutlineSearch
            fontSize={20}
           className="mt-2 mx-auto"
        />
        </div>
        <input
        className="w-[150px] h-[36px] bg-searchBargrey rounded-md focus:outline-none"
        />
    </div>
  )
}

export default SearchBar