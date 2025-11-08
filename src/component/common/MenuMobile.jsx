import { Link } from "react-router-dom";

const MobileMenu = ({showMobileMenu}) => {
  return (
    <div className={`md:hidden h-full w-3/4 bg-white p-4 border border-gray-300 shadow-lg 
    top-0 left-0 fixed z-50 transition-transform duration-300   
    ` + (showMobileMenu ? ' transform translate-x-0' : ' transform -translate-x-full')}> 
        {/* Mobile Menu Content */} 
        <h2 className="font-bold text-xl pt-4 pb-6 border-b border-gray-300">
            Shop<span className="text-amber-500">99</span>
          </h2>

          <div className="flex flex-col gap-2 mt-6">
            <Link className="font-medium hover:text-amber-500" to="/" >MEN</Link>
            <Link className="font-medium hover:text-amber-500" to="/" >WOMEN</Link>  
            <Link className="font-medium hover:text-amber-500" to="/" >KIDS</Link>
            <Link className="font-medium hover:text-amber-500" to="/" >NEW ARRIVALS</Link>   
          </div>
          
    </div>
  )


}

export default MobileMenu;