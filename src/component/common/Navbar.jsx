import useState from "react"
import {Link} from "react-router-dom"
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import SearchBar from "../Layout/SearchBar"


const Navbar = () => {


  return (
    <nav className="border border-gray-300">

      <div className="container mx-auto flex justify-between items-center py-3">
      <div>
        {/* Logo */}
        <h2 className="font-bold text-xl">
          Shop<span className="text-amber-500">99</span>
        </h2>
      </div>

      <div className=" flex items-center gap-6 " >
        <Link className="font-medium " to="/">MEN</Link>
        <Link className="font-medium " to="/">WOMEN</Link>
        <Link className="font-medium " to="/">KIDS</Link>
        <Link className="font-medium " to="/">NEW ARRIVALS</Link>
      </div>

      <div className="flex items-center gap-3">

<CiUser  className="w-6 h-6"/>

<SearchBar/>

<CiShoppingCart  className="w-6 h-6"/>

</div>



      </div>
    </nav>
  )
}

export default Navbar