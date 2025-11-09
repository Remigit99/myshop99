import { Link } from "react-router-dom"

import APPSTORE from "../../assets/images/appstore.png"
import PLAYSTORE from "../../assets/images/play-store-logo.png"


const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-6 pb-2">
      <div className="container mx-auto py-8  text-white ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="mb-8 lg:grid-cols-1">
            {/* Logo */}
            <h2 className="font-bold text-3xl">
              Shop<span className="text-amber-500">99</span>
            </h2>
          </div>

          <div className="lg:grid-cols-2">
            <h4 className="font-bold text-2xl mb-6">NEW TO shop99?</h4>
            <p>Subscribe to our newsletter to get updates on our latest offer!</p>
            <div className="flex justify-start my-4">
              <input type="email" placeholder='Enter your email' className='bg-amber-50 placeholder:text-gray-600 md:border p-2 outline-none border-0 rounded-l-md' />
              <button className='bg-amber-500 text-white p-2 rounded-r-md'>Subscribe</button>
            </div>

            <div className="flex justify-start gap-2" >
              <input type="checkbox" name="agree" id="agree" />
              <p className=" w-4/5 md:w-1/2 lg:w-5/5 text-gray-400 text-sm">I agree to shop99's Privacy and Cookies Policy.
                You can unsubscribe from newsletters at any time.
                <Link to="/">I accept the Legal Terms</Link>
              </p>
            </div>
          </div>

          <div className="lg:grid-cols-1">
            <h4>DOWNLOAD shop99 FREE APP</h4>
            <p>Get access to exclusive offers!</p>
            <div>

            </div>
          </div>
        </div>


        <div></div>

      </div>
      <p className='text-gray-500 text-center'>© 2025 Shop99. All rights reserved.</p>

    </footer>
  )
}

export default Footer