import React from 'react'

const Vote = () => {
  return (
    <div className="max-w-[600px] max-h-[910px] h-fit mx-auto rounded-2xl border-[1px] border-gray my-12">

      <div className="text-[16px] text-darkgray font-semibold w-4/5 mx-6 my-4">
      Would you prefer to spend to lakhs of rupees on just some online certifications to
get a certificate building some capstone projects or getting work experience
working with real teams?
      </div>

     <div className="flex mx-4 my-4">
      <input 
        type="checkbox"
        className="mx-4 rounded-full"
      />
      <div className="text-black text-[14.5px] font-semibold">
        Certificates
      </div>
     </div>

     <div className="flex mx-4 my-4">
      <input 
        type="checkbox"
        className="mx-4 rounded-full"
      />
      <div className="text-black text-[14.5px] font-semibold">
        Certificates
      </div>
     </div>

     <div className="bg-[#E5F6EE] text-[#3FAB77] w-4/5 rounded-xl mx-auto p-4 m-6 font-semibold">
     Right! As we say, no company wants your certificates but every company  wants  
your work experience
     </div>

    </div>
  )
}

export default Vote