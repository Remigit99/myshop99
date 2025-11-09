
import { RiFacebookLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

const Topbar = () => {
  return (

<div className=" w-full  bg-black h-6">

    <div className="container mx-auto text-white flex justify-between items-center">
      <div className="hidden md:flex items-center gap-1">
        <RiFacebookLine />
        <CiInstagram />
        <RiTwitterXFill />
      </div>

      <div className="flex md:grow">
        <p className="text-sm " >
          Summer Sale For All Swim Swim Suits And Free Express Delivery - OFF 50%!
          <a href="#" className="font-bold underline ml-1">Shop Now</a>
        </p>

      </div>
      <div className="hidden md:block">
        <select className="bg-white px-1 text-black text-sm outline-none">
          <option>English</option>
          <option>Yoruba</option>
          <option>Spanish</option>
          <option>Arabic</option>
        </select>
      </div>
    </div>
  </div>
  )
}

export default Topbar