import React from "react";
const TableComp = () => {
  const data = [
    {
      "": "CARS24",
      __1: "UI/UX Designer",
      __2: "1-3 yrs",
    },
    {
      "": "Kwalee",
      __1: "Junior Software Engineer - Frontend",
      __2: "1 yr",
    },
    {
      "": "Kwalee",
      __1: "Junior DevOps Engineer",
      __2: "1 yr",
    },
    {
      "": "Champhunt LLC",
      __1: "Android Intern",
      __2: "0-1 yr",
    },
    {
      "": "Sharechat",
      __1: "Product Manager",
      __2: "3+ yrs",
    },
    {
      "": "Sharechat",
      __1: "Operations Associate (SC - Lifestyle - Kannada)",
      __2: "1-4 yrs",
    },
    {
      "": "Paytm",
      __1: "Digital Marketing Associate",
      __2: "1-4 yrs",
    },
    {
      "": "Paytm",
      __1: "CRM Associate",
      __2: "1+ yrs",
    },
    {
      "": "Paytm",
      __1: "Risk Analyst",
      __2: "2-4 yrs",
    },
    {
      "": "Open Financial Technologies",
      __1: "Associate Product Manager",
      __2: "0.6 -1 yr",
    },
    {
      "": "Open Financial Technologies",
      __1: "Operations Executive",
      __2: "1-3 yrs",
    },
    {
      "": "Open Financial Technologies",
      __1: "Software Engineer",
      __2: "1-3 yrs",
    },
    {
      "": "Open Financial Technologies",
      __1: "Test Engineer - Mobile, API & Web",
      __2: "1-3 yrs",
    },
    {
      "": "Jupiter",
      __1: "Copywriter",
      __2: "2-3 yrs",
    },
    {
      "": "Navi",
      __1: "Associate HRBP - Non-Tech",
      __2: "1-3 yrs",
    },
    {
      "": "Navi",
      __1: "Associate - Hindsighting",
      __2: "1-2 yrs",
    },
    {
      "": "Zolo",
      __1: "Talent Acquisition Associate",
      __2: "2+ yrs",
    },
    {
      "": "PhonePe",
      __1: "Product Solution Engineer",
      __2: "2+ yrs",
    },
    {
      "": "Swiggy",
      __1: "Business Associate",
      __2: "1-3 yrs",
    },
    {
      "": "Flipkart",
      __1: "UI Engineer 1",
      __2: "1-3 yrs",
    },
  ];
  return (
    <div className="bg-white">
      <table className="w-full font-inter border-[2px] border-[#EBEBEC]">
        <thead>
          <tr className="text-left font-semibold text-[.8125rem] text-[#181A1B] border-y border-[#EBEBEC] ">
            <td className="w-30 py-1.5 px-2 border-r last:border-r-0">
              Contact
            </td>
            <td className="w-40 py-1.5 px-2 border-r last:border-r-0">Url</td>
            <td className="w-40 py-1.5 px-2 border-r last:border-r-0">
              Contact
            </td>
            <td className="w-40 py-1.5 px-2 border-r last:border-r-0">
              Something
            </td>
            <td className="w-40 py-1.5 px-2 border-r last:border-r-0">
              Something
            </td>
          </tr>
        </thead>



        <tbody className="text-[.8125rem]">
          {data.map((currElem, index) => {
            return (
              <tr>
                <td className="px-2 h-[50px] border-b border-[#EBEBEC] border-r w-40 last:border-r-0 flex items-center box-content cursor-pointer">
                  {/* <span className="w-4 h-4 border mr-2 flex items-center justify-center text-[.5625rem] rounded-[4px] border-[#c2c3c4] font-semibold ">
                    {currElem[""].charAt(0)}
                  </span> */}
                  {currElem[""]}
                </td>
                <td className="px-2 h-[50px] border-b border-[#EBEBEC] border-r w-60 last:border-r-0 cursor-pointer">
                  {currElem["__1"]}
                </td>
                <td className="px-2  h-[50px] border-b border-[#EBEBEC] border-r w-50 last:border-r-0 cursor-pointer">
                  {currElem["__2"]}
                </td>

                <td className="px-2 h-[50px] border-b border-[#EBEBEC] border-r w-80 last:border-r-0 cursor-pointer">
                  {currElem["__1"]}
                </td>
                <td className="px-2  h-[50px] border-b border-[#EBEBEC] border-r w-50 last:border-r-0 cursor-pointer">
                  {currElem["__2"]}
                </td>


              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComp;
