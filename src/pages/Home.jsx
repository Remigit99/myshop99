
import { HeroSwiper } from '../component/common/HeroSwiper';
import HeaderMenu from '../component/common/HeaderMenu';
import FlashSales from '../component/common/FlashSales';
import Categories from '../component/Layout/Categories';
import BestSelling from '../component/Layout/BestSelling';
import FeaturedProduct from '../component/Layout/FeaturedProduct';
import NewArrival from '../component/Layout/NewArrival';

import { CiDeliveryTruck } from "react-icons/ci"
import { BsShieldCheck } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";



const Home = () => {
  return (
    <main>

      <div className='container mx-auto flex gap-8 py-4'>
        <div className='hidden lg:block  bg-gray-100 pl-4 pt-4 pr-8 border-0 rounded-md'>
          <HeaderMenu />
        </div>

        <div className='flex flex-1'>
          <HeroSwiper />
        </div>

      </div>

      <FlashSales />

      <Categories />

      <BestSelling />

      <FeaturedProduct />

      <NewArrival />

      <section className="py-12 mb-16">
        <div className="w-3/4 mx-auto flex  flex-col gap-10 md:flex-row md:justify-between items-center">
          <article className="flex flex-col gap-1 items-center">
            <CiDeliveryTruck className="text-5xl mb-4" />
            <h4 className="font-bold ">FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
          </article>

          <article className="flex flex-col gap-1 items-center">
            <CiHeadphones className="text-5xl mb-4" />
            <h4 className="font-bold ">24/7 CUSTOMER SUPPORT</h4>
            <p>Friendly 24/7 customer support</p>
          </article>

          <article className="flex flex-col gap-1 items-center">
            <BsShieldCheck className="text-5xl mb-4" />

            <h4 className="font-bold ">MONEY BACK GUARANTY</h4>
            <p>We return money within 30 days</p>
          </article>
        </div>
      </section>

    </main >
  )
}

export default Home;