
import { HeroSwiper } from '../component/common/HeroSwiper';
import HeaderMenu from '../component/common/HeaderMenu';
import FlashSales from '../component/common/FlashSales';
import Categories from '../component/Layout/Categories';
import BestSelling from '../component/Layout/BestSelling';
import FeaturedProduct from '../component/Layout/FeaturedProduct';
import NewArrival from '../component/Layout/NewArrival';

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

      <NewArrival/>

    </main >
  )
}

export default Home;