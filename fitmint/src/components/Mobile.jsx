import React from 'react'

const Mobile = () => {
  return (
    <div className="w-full bg-[#fff] pt-[162px]  bg-[url('https://fitmint.io/v2/grid.svg')] bg-contain min-h-[740px] relative">
      

      <img 
        className="aspect-auto absolute bottom-6 w-[536px] z-20 right-[380px]"
        src="https://fitmint.io/v2/phone.png"
      />

{/*  */}
      <img 
      className="mx-auto  mySpin w-[516px] aspect-auto"
        src="/bgCircle.svg"
      />
      

    </div>
  )
}

export default Mobile