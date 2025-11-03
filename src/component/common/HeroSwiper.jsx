import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import H1 from "../../assets/header1.png"
import H2 from "../../assets/header2.png"
import H3 from "../../assets/header3.png"
import H4 from "../../assets/header4.png"




export const HeroSwiper = () => {



  return (
    <Carousel>
      <div>
        <img src={H1} alt="header1" className='w-full h-[500px] rounded-md' />
      </div>
      <div>
        <img src={H2} alt="header1" className='w-full h-[500px] rounded-md' />
      </div>
      <div>
        <img src={H3} alt="header1" className='w-full h-[500px] rounded-md' />
      </div>
      <div>
        <img src={H4} alt="header1" className='w-full h-[500px] rounded-md' />
      </div>

    </Carousel>
  );
}




