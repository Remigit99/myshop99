
import { Link } from "react-router-dom";

import { PiCookingPotLight } from "react-icons/pi";
import { BsPhone } from "react-icons/bs";
import { TbRibbonHealth } from "react-icons/tb";
import { CiHome } from "react-icons/ci";
import { MdOutlineElectricalServices } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiBabyThin } from "react-icons/pi";
import { PiGameControllerThin } from "react-icons/pi";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";


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
    icon: <CiHome />,
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




const HeaderMenu = () => {

  return (
    <>
      {
        menuCategories.map((item, index) => {
          // const Icon = item.icon;
          return (
            <div key={index} className='hidden md:flex gap-2 py-2 hover:text-amber-500 items-center'>
              <span>{item.icon}</span>
              <Link to="/">{item.title}</Link>
            </div>)
        })
      }

    </>
  )


}

export default HeaderMenu;