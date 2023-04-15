import React from 'react'
import TableComp from './../components/common/Table';
import Sider from './../components/Sider';
import Button from './../components/common/Button';
import TextBtn from './../components/common/TextBtn';
import { useRouter } from 'next/router';
import { Image } from 'next/image';
import {FiKey} from 'react-icons/fi'
import {SlEnvolopeLetter} from 'react-icons/sl'
import {HiCode} from 'react-icons/hi'
import {AiOutlineTeam} from 'react-icons/ai'
import Link from 'next/link';
import {BiLeftArrowAlt} from 'react-icons/bi'

const Companies = () => {
  const router = useRouter()


  return (
    <div className="w-full min-h-screen bg-white ">

    <Sider>
    <div>
    <div 
// onClick={() => {
//   router.push("/companies")
// }}
className="w-full mb-[26px] flex px-[16px] py-[13px] my-auto text-[13px] hover:bg-[#EAEAEA]">
{/* <BiLeftArrowAlt
className="my-auto"
  fontSize={20}
/> */}
   <span className="mx-1 my-auto text-[15px] "> Companies</span>
</div>


</div>

    </Sider>

<div className="ml-[240px] px-[150px] py-[100px] max-h-full">
<div className="flex justify-end py-2">
 <TextBtn
  text="Add"
  link="/companies/create"
 />
</div>
        <TableComp/>

        </div>
    </div>
  )
}

export default Companies