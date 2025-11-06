import {Link} from "react-router-dom"
import PS5 from "../../assets/images/ps5-playstation.png"
import WwHAT from "../../assets/images/woman-with-hat.png"
import SPEAKER from "../../assets/images/keyboard.png"
import PERFUME from "../../assets/images/Gucci_perfume.png"   


const NewArrival = () => {
  return (
    <section>
        <div className='container mx-auto py-8'>

            <div className='flex flex-start items-center gap-4'>
                    <div className='w-6 h-8 bg-amber-500'></div>
                    <p className='text-[16px] text-amber-500'>Categories </p>
                </div>


            </div>

            <div className='my-8 grid grid-cols-2 gap-6 '>

                <div className="relative bg-black py-6 px-6">
                    <img src={PS5} alt="playStation_png" />

                    <div>
                        <h3>PlayStation</h3>
                        <p>
                            Black and White Version of the PS5
                            coming out on sale
                        </p>

                        <Link to="/">Shop Now</Link>
                    </div>
                </div>



                <div>
                    <div className="relative bg-black">
                        <img src={WwHAT} alt="woman_with_hat" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="relative bg-black">
                            <img src={SPEAKER} alt="speakers" />
                        </div>
                        
                        
                        <div className="relative bg-black">
                            <img src={PERFUME} alt="perfume" />
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default NewArrival