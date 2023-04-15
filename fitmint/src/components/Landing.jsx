import React from 'react'

const Landing = () => {
  return (
    <div className="w-8/12 min-h-fit relative mx-auto  pt-[58px] pt-[120px]">
    <div className="absolute top-2 left-2 floating">
      <img 
      className="h-[110px] aspect-auto "
        src="https://fitmint.io/v2/hover_elements/1.png"
      />
    </div>

    <div className="absolute right-2 top-3 floating" >
        <img 
        className="h-[110px] aspect-auto"
            src="https://fitmint.io/v2/hover_elements/2.png"
        />
    </div>

    <div className="absolute left-12 top-56 floating">
        <img 
        className="h-[110px] aspect-auto"
            src="https://fitmint.io/v2/hover_elements/3.png"
        />
    </div>

    <div className="absolute right-20 top-64 floating" >
        <img 
         className="h-[110px] aspect-auto"
            src="https://fitmint.io/v2/hover_elements/4.png"
        />
    </div>
       <div className="Intro text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center mx-auto max-w-[721px]"
       
       >
       Fitness was never this fun
       </div>

       <h1 className=" mx-auto my-[30px] px-[30px]
       inter font-semibold opacity-50 text-center mt-4 md:mt-8 text-md lg:text-xl max-w-lg
       ">
       Transform your daily walk or run into an exciting adventure with friends
       </h1>


       <div className="mt-[158px] mx-auto max-w-fit">
        <img 
        alt="product-hunt"
            src="https://fitmint.io/v2/product_hunt.svg"
        />
       </div>
    </div>
  )
}

export default Landing