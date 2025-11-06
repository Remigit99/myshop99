import JB from '../../assets/images/JBL_BOOMBOX_2_HERO.png';

const FeaturedProduct = () => {
    return (
        <section className=" text-white my-16">
            <div className="container mx-auto bg-gray-900 flex justify-between items-center  px-8">

                <div>

                    <h3 className='text-amber-500 font-bold text-4xl mb-8'>Featured</h3>

                    <div className='flex flex-col justify-start gap-8'>
                        <h2 className='font-bold text-3xl'>Enhance Your</h2>
                        <h2 className='font-bold text-3xl'>Music Experience</h2>
                        <p className='text-gray-300 w-3/5'>Discover top-notch headphones with
                            superior sound quality and comfort.
                            Elevate your listening experience
                            today!</p>
                        <button className='w-fit py-2 px-4 bg-amber-500 rounded-md font-bold'>Shop Now</button>
                    </div>


                </div>


                <div>
                    <img src={JB} alt="Featured Product" className='h-154 w-200'/>
                </div>

            </div>



        </section>
    )
}

export default FeaturedProduct