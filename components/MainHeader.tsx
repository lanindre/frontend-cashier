"use client";

import { MenuContext } from '@/context/MenuContext'
import Link from 'next/link'
import React from 'react'
import { FaBars} from "react-icons/fa"
import { useContext } from 'react';

const MainHeader = () => {
    const {toggle} = useContext(MenuContext);
  return (
    <div className="bg-white flex justify-between items-center px-4 h-12">
        <div>BasCoff</div>
        <div onClick={toggle}><FaBars className="cursor-pointer"/></div>
    </div>
  )
}

export default MainHeader