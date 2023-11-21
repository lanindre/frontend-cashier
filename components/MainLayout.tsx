"use client";
import React, { useContext } from 'react'
import MainHeader from './MainHeader'

import { AiOutlineHome } from "react-icons/ai"
import { GrProjects } from "react-icons/gr"
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa"
import { BsFillBasket2Fill } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"
import { SiHelpscout } from "react-icons/si"
import { MenuContext } from '@/context/MenuContext'

const MainLayout = ({children} : {children: React.ReactNode}) => {
    const {open} = useContext(MenuContext);
  return (
    <div className="bg-gray-500 w-screen min-h-screen">
        <MainHeader />
        <div className="flex justify-start items-start">
            {/* <aside className="bg-white rounded-lg w-60 p-4"> */}
            <aside className={`bg-white rounded-lg overflow-hidden transistion-all duration-200 ${open ? "w-60 p-4" : "w-0"} `}>
             <ul>
                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <AiOutlineHome className="mr-2" />
                  <a href="/">Home</a>
                </li>

                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <GrProjects className="mr-2" />
                  <a href="/category">Category</a>
                </li>

                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <BsFillBasket2Fill className="mr-2" />
                  <a href="/jenis">Jenis</a>
                </li>

                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <BsFillBasket2Fill className="mr-2" />
                  <a href="/menu">Menu</a>
                </li>

                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <BsFillBasket2Fill className="mr-2" />
                  <a href="/stok">Stok</a>
                </li>

                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <BsFillBasket2Fill className="mr-2" />
                  <a href="/pelanggan">Pelanggan</a>
                </li>

                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <BsFillBasket2Fill className="mr-2" />
                  <a href="/meja">Meja</a>
                </li>

                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <BsFillBasket2Fill className="mr-2" />
                  <a href="/pemesanan">Pemesanan</a>
                </li>

                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <BsFillBasket2Fill className="mr-2" />
                  <a href="/transaksi">Transaksi</a>
                </li>
                
                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <SiHelpscout  className="mr-2" />
                     <a href="/about-us">About Us</a>
                </li>

                <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <FiPhoneCall className="mr-2" />
                     <a href="/contact-us">Contact Us</a>
                </li>
            </ul>
            </aside>
            <main className="flex-1">{children}</main>
        </div>
    </div>

  )
}

export default MainLayout