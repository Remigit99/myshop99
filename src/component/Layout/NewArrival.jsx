import { Link } from "react-router-dom"
import PS5 from "../../assets/images/ps5-playstation.png"
import WwHAT from "../../assets/images/woman-with-hat.png"
import SPEAKER from "../../assets/images/keyboard.png"
import PERFUME from "../../assets/images/Gucci_perfume.png"


const NewArrival = () => {
    return (
        <section>
            <div className='container mx-auto py-8 text-white'>

                <div className='flex flex-start items-center gap-4'>
                    <div className='w-6 h-8 bg-amber-500'></div>
                    <p className='text-[16px] text-amber-500 font-medium'>New Arrivals</p>
                </div>


                <div className='my-8 grid grid-cols-1 md:grid-cols-2 gap-6 '>

                    <div className="relative bg-black">
                        <img src={PS5} alt="playStation_png" 
                        className="" />

                        <div className="absolute bottom-6 left-4">
                            <h3 className="font-bold ">PlayStation 5</h3>
                            <p className="text-gray-100 my-4 w-3/4">
                                Black and White Version of the PS5
                                coming out on sale
                            </p>

                            <Link to="/" className="font-medium" >Shop Now</Link>
                        </div>
                    </div>



                    <div className="flex flex-col gap-2">

                        <div className="relative bg-black">
                            <img src={WwHAT} alt="woman_with_hat" 
                            className=""
                            />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-2xl font-bold">Women's Collections</h3>
                                <p className="text-gray-100 my-1 w-3/4">
                                    Featured Women's collections that give you
                                    another vibe
                                </p>
                                <Link to="/" className="font-medium" >Shop Now</Link>           

                            </div>
                        </div>

                            <div className="grid grid-cols-2 gap-6 mt-6">
                                <div className="relative bg-black">
                                    <img src={SPEAKER} alt="speakers"
                                    className="" />

                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="font-bold">Speakers</h3>
                                        <p className="text-gray-100 my-1 w-3/4">
                                            Best quality speakers for your
                                            music and gaming needs
                                        </p>
                                        <Link to="/" className="font-medium" >Shop Now</Link>     

                                        
                                    </div>
                                </div>


                                <div className="relative bg-black">
                                    <img src={PERFUME} alt="perfume" />

                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="font-bold">Perfume</h3>
                                        <p className="text-gray-100 my-1 w-3/4">
                                            Top quality perfumes for both   
                                        </p>
                                        <Link to="/" className="font-medium" >Shop Now</Link>       

                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>


            </div>


        </section>

    )
}

export default NewArrival