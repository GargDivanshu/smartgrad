import React from 'react'
import { Image } from 'next/image';
import {AiOutlineSearch} from 'react-icons/ai'
import { siderBtn } from './../utils/siderBtn';
import Button from './common/Button';
import Link from 'next/link';
import {useRouter } from 'next/router';

const Sider = ({children}) => {

  const router = useRouter()

  
  
  return (
    <>
    <div
    className={`w-[225px] pt-[28px] bg-lightwhite overflow-x-hidden overflow-y-auto no-scrollbar h-screen fixed`}
    >
    {children}
    </div>
    </>
  )
}

export default Sider