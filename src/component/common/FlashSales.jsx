import Countdown from "react-countdown";
import CountDownRendered from "../../utils/CountDownRendered";
// import {useDispatch} from "react-redux"
import { useGetProductsQuery } from "../../store/features/products/productsApi";
import ProductCard from "./ProductCard";



const FlashSales = () => {

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // Set target time to 30 days from now

    const { data: products = [], isLoading, error } = useGetProductsQuery(6);

    if (isLoading) {
        return <div className="flex justify-center items-center"> <h2>Loading</h2></div>
    }


    if (error) {
        return <div className="flex justify-center items-center"> <h2>Something went wrong! {error.message}</h2> </div>
    }

    

    return (
        <section className='py-15'>
            <div className="container mx-auto">
                <div className='flex flex-start flex-col md:justify-between gap-6'>
                    <div className='flex flex-start items-center gap-4'>
                        <div className='w-6 h-8 bg-amber-500'></div>
                        <p className='text-[16px] text-amber-500 font-medium'>Today's </p>
                    </div>

                    <div className='flex flex-col md:flex-start md:items-center md:gap-20'>
                        <div className='flex flex-start items-center gap-4'>
                            <h2 className='font-bold text-2xl md:text-4xl'>Flash Sales</h2>
                            
                        </div>

                        <>
                            <Countdown date={targetDate} renderer={CountDownRendered} />
                        </>

                    </div>
                </div>


                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-14 mt-12">

                    {/* Flash sales content goes here */}

                    {
                        products?.products.map((product) => (
                            <ProductCard {...product} key={product.id} />

                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default FlashSales