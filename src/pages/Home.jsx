import React from 'react'
import H1 from "../assets/header1.png"
// import { menuCategories } from '../component/data/menuCategories'
import { Link } from 'react-router-dom'


import { PiCookingPotLight } from "react-icons/pi";
import { BsPhone } from "react-icons/bs";
import { TbRibbonHealth } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { MdOutlineElectricalServices } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiBabyThin } from "react-icons/pi";
import { PiGameControllerThin } from "react-icons/pi";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";

import { HeroSwiper } from '../component/common/HeroSwiper';
import HeaderSlider from "../component/common/HeaderSlider"


// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css';

// const swiper = new Swiper(...);


const menuCategories = [
  {
    title: "Appliances",
    icon: <PiCookingPotLight />,
  },
  {
    title: "Phones & Tablets",
    icon: <BsPhone />,
  },
  {
    title: "Health & Beauty",
    icon: <TbRibbonHealth />,
  },
  {
    title: "Home & Office",
    icons: GoHome,
  },
  {
    title: "Electronics",
    icon: <MdOutlineElectricalServices />,
  },
  {
    title: "Fashion",
    icon: <GiClothes />,
  },
  {
    title: "Supermarket",
    icon: <IoStorefrontOutline />,
  },
  {
    title: "Computing",
    icon: <HiOutlineComputerDesktop />,
  },
  {
    title: "Baby Products",
    icon: <PiBabyThin />,
  },
  {
    title: "Gaming",
    icon: <PiGameControllerThin />,
  },
  {
    title: "Other Categories",
    icon: <IoEllipsisHorizontalCircle />,
  },
];



const Home = () => {
  return (
    <main>

      <div className='container mx-auto flex gap-8 py-4'>

        <div className='bg-gray-100 pl-4 pt-4 pr-8 border-0 rounded-md'>
          {
            menuCategories.map((item, index) => {
              // const Icon = item.icon;
              return (
                <div key={index} className='flex gap-2 py-2 hover:text-amber-500 items-center'>
                  <span>{item.icon}</span>
                  <Link to="/">{item.title}</Link>
                </div>)
            })
          }

        </div>
        <div className='flex flex-1'>
          {/* <HeaderSlider /> */}

        <HeroSwiper />
        {/* <img src={H1} alt="header1" className='w-full rounded-md' /> */}
        </div>

      </div>
    </main >
  )
}

export default Home;