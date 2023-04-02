import React from 'react'

const QuesImg = () => {
  return (
    <div className="max-w-[600px] max-h-[910px] h-fit mx-auto rounded-2xl border-[1px] border-gray my-12">
      <div className="text-xs font-normal my-6 mx-6">
        Aditya in <span className="text-redditorange">Reddit</span>
      </div>

      <div className="text-[16px] font-semibold w-4/5 mx-6 my-4">
      Got laid off in January from my first job. Applying actively after. 
Still no response. I do get calls but no interview. They always say 
“you don’t have much experience”. Also didn’t included education 
as i am from commerce background. In b/w took a break and did 
course on node js
      </div>

      <img 
      src="https://www.resumonk.com/assets/template-thumbnails/elemental-9a290f22da422ad3ea13363a7b2daff2857371ee649115e5e28f4a4414c640a4.jpg"
        className="w-[541px] h-[482px] object-cover mx-auto my-8" 
      />

      <div className="py-6 border-t-[1px] border-gray w-11/12 mx-auto flex">
         <div className="w-1/5">
          <div className="w-[30px] h-[30px] bg-darkgray rounded-full mx-auto">

          </div>
         </div>
         <div className="w-4/5 text-[14px] font-semibold">
         Just having one internship experience or having joined one company does
not mean that your career is all set. Companies always seek for candidates
with experience not dummy projects. There are many who may have more
work experience than you and it’s your turn to stand out by gaining more
work experience with Experience Enhancement Programs
         </div>
      </div>

    </div>
  )
}

export default QuesImg