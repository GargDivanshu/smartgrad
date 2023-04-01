import React from 'react'

const Form = () => {
  return (
    <>
    <form className="mx-auto max-w-[700px] my-8 px-auto">
        <input
            type="text"
            className="max-w-[750px] mx-auto my-6 rounded-xl border-[1px] border-gray text-darkgray w-[691px] h-[48px] text-lg px-4"
            placeholder="Title"
        />

<input
            type="text"
            className="max-w-[750px] mx-auto my-6 rounded-xl border-[1px] border-gray text-darkgray w-[691px] h-[231px] text-lg px-4"
            placeholder="Description"
        />

        <div className="flex max-w-[280px]">
        <input
            type="text"
            className="max-w-[750px] mx-auto my-6 rounded-xl border-[1px] border-gray text-darkgray w-[71px] h-[53px] text-lg px-4"
            placeholder="INR"
        />

        <input
            type="text"
            className="max-w-[750px] mx-auto my-6 rounded-xl border-[1px] border-gray text-darkgray w-[175px] h-[53px] text-lg px-4"
            placeholder="Enter Amount"
        />


        </div>

        <div className="flex justify-end">
        <button className="rounded-3xl bg-skyblue text-white h-[40px] w-[88px]">
            Post
        </button>
        </div>
        
    </form>

    </>
  )
}

export default Form