import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'


const SearchBar = () => {
  return (
    <div className="min-w-fit flex w-[100px] h-[40px] bg-bggray rounded-md pl-2">
        <AiOutlineSearch
            fontSize={25} 
            className="my-auto"
        />
        <input 
        className="m-1 bg-bggray"
        />
    </div>
  )
}

export default SearchBar