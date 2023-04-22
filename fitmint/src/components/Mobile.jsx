import React from 'react'

const Mobile = () => {
  return (
    <div className="w-full bg-[#fff]  bg-[url('https://fitmint.io/v2/grid.svg')] bg-contain max-h-fit relative">
      

      <img 
        className="aspect-auto absolute w-[536px] top-0 left-0 right-0 bottom-0 m-auto z-20 floating"
        src="https://fitmint.io/v2/phone.png"
      />

{/*  */}
      {/* <img 
      className="mx-auto  mySpin w-[516px] aspect-auto"
        src="/bgCircle.svg"
      /> */}

      <div id="container absolute top-0 left-0 right-0 bottom-0 m-auto w-[716px] aspect-auto">
<div id="circle">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
    <defs>
        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
    </defs>
    <circle cx="150" cy="100" r="75" fill="none"/>
    <g>
        <use xlinkHref="#circlePath" fill="none"/>
        <text fill="#000">
            <textPath 
            className="text-[#189944]"
            xlinkHref="#circlePath"> 
            <tspan fill="#189944">fitmint </tspan> <tspan fill="#734FF4">fitmint </tspan> 
            <tspan fill="#DF742C">fitmint </tspan> <tspan fill="#DA4C66">fitmint </tspan>
            <tspan fill="#E69C14">fitmint </tspan> <tspan fill="#189944">fitmint </tspan> 
            <tspan fill="#734FF4">fitmint </tspan> <tspan fill="#DF742C">fitmint </tspan> 
            <tspan fill="#DA4C66">fitmint </tspan> <tspan fill="#E69C14">fitmint </tspan> 
            </textPath>
        </text>
    </g>
</svg>
</div>
</div>

      

    </div>
  )
}

export default Mobile