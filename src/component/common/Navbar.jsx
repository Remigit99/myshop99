import { useState } from "react";
import { Link } from "react-router-dom"
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import SearchBar from "../Layout/SearchBar"
import { CgMenuRightAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import MenuMobile from "./MenuMobile";



const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }


  return (
    <nav className="border border-gray-300">

      <div className="container mx-auto flex justify-between items-center py-3">
        <div>
          {/* Logo */}
          <Link to="/" className="font-bold text-xl">
            Shop<span className="text-amber-500">99</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 " >
          <Link className="font-medium " to="/">MEN</Link>
          <Link className="font-medium " to="/">WOMEN</Link>
          <Link className="font-medium " to="/">KIDS</Link>
          <Link className="font-medium " to="/">NEW ARRIVALS</Link>
        </div>

        <div className="flex items-center gap-3">

          <CiUser className="w-6 h-6" />

          <SearchBar />

          <Link to="/cart">
          <CiShoppingCart className="w-6 h-6" />
          </Link>

          {
            showMobileMenu ?

              <MdClose className="w-6 h-6 md:hidden"
                onClick={toggleMobileMenu} />
              :
              <CgMenuRightAlt className="w-6 h-6 md:hidden"
                onClick={toggleMobileMenu} />


          }

          <MenuMobile showMobileMenu={showMobileMenu} />
        </div>



      </div>
    </nav>
  )
}

export default Navbar