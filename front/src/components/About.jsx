import React from 'react'

const About = () => {
  return (
    <div className="p-[40px] bg-white">
      
      <h1 className="DMSerif text-[36px] font-bold max-w-[649px] mx-auto justify-center text-center leading-[35px]">Frontend Practice provides you with the inspiration and resources to create beautiful websites.</h1>

      <p className="text-[26px] text-center max-w-[450px] my-[40px] mx-auto">Here are some ways you can benefit from using our platform:</p>


      <div className="py-[10px] px-0 sm:px-[37px] m-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-w-[1000px]">
        <div className="flex flex-col sm:flex-row max-w-full sm:max-w-[446px] p-[15px] m-[11px] border-[2px] border-black">
          <img 
          className="w-[70px] sm:w-[100px] aspect-auto mx-auto"
          src="https://images.prismic.io/frontendpractice/f990db40-ba07-479c-b52c-3b2c6caabc89_domain.png?auto=compress,format"
          />

          <p className="text-center m-auto max-w-[285px]">
          Enhance your skills by building real websites selected for their educational value.
          </p>
        </div>


         <div className="flex flex-col sm:flex-row max-w-[446px] p-[15px] m-[11px] border-[2px] border-black">
         <img 
         className="w-[70px] sm:w-[100px] aspect-auto mx-auto"
         src="https://images.prismic.io/frontendpractice/65eee214-bbfe-4f9e-ad0f-70f7785679be_layout.png?auto=compress,format"
         />
         <p className="text-center m-auto max-w-[285px]">
         Test and improve your frontend knowledge through various challenges.
         </p>
         </div>

         <div className="flex flex-col sm:flex-row max-w-[446px] p-[15px] m-[11px] border-[2px] border-black">
            <img 
            className="w-[70px] sm:w-[100px] aspect-auto mx-auto"
            src="https://images.prismic.io/frontendpractice/8d3c1f70-6ff3-41f0-b9d6-3b46f2899359_pantone.png?auto=compress,format"
            />


            <p className="text-center m-auto max-w-[285px]">
            Use the provided color palettes for each project to save time.
            </p>
         </div>

         <div className="flex flex-col sm:flex-row max-w-[446px] p-[15px] m-[11px] border-[2px] border-black">
            <img 
            className="w-[70px] sm:w-[100px] aspect-auto mx-auto"
            src="https://images.prismic.io/frontendpractice/d6e88860-7347-4d32-acf8-aa1f01db8685_idea.png?auto=compress,format"
            />

            <p className="text-center m-auto max-w-[285px]">
            Find helpful, curated  resources to tackle challenging elements.
            </p>
         </div>
      </div>

      <div className="h-[120px]">
        <h1 className="DMSerif text-[36px] font-bold max-w-[400px] mx-auto justify-center text-center leading-[35px]">
        Ready to become a better frontend developer?
        </h1>
        <div className="w-fit mx-auto">
        <button className="mx-auto  border-[2px] bg-white border-black hover:bg-black px-[15px] font-[600] duration-200 ease-in hover:text-white h-[47px]">
            Get Started
        </button>
        </div>
      </div>
    </div>
  )
}

export default About