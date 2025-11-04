import Countdown from "react-countdown";
import CountDownRendered from "../../utils/CountDownRendered";

const FlashSales = () => {

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30); // Set target time to 30 days from now

    return (
        <section className='py-15'>
            <div className="container mx-auto">
                <div className='flex flex-start flex-col gap-6'>
                    <div className='flex flex-start items-center gap-4'>
                        <div className='w-6 h-8 bg-amber-500'></div>
                        <p className='text-[16px]'>Today's </p>
                    </div>

                    <div className='flex flex-start items-center gap-20'>
                        <div className='flex flex-start items-center gap-4'>
                            <h2 className='font-bold text-5xl'>Flash Sales</h2>
                            <div></div>
                        </div>

                        <>
                        <Countdown date={targetDate} renderer={CountDownRendered} />
                        </>

                    </div>
                </div>


                <div>
                    {/* Flash sales content goes here */}

                </div>
            </div>
        </section>
    )
}

export default FlashSales