import { BsPhone } from "react-icons/bs"
import { HiOutlineDesktopComputer } from "react-icons/hi"
import { IoWatchOutline } from "react-icons/io5"
import { BsCamera} from "react-icons/bs"
import { GiHeadphones } from "react-icons/gi"
import { PiGameControllerThin } from "react-icons/pi"

const Categories = () => {
    return (
        <section className='py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-start items-center gap-4'>
                    <div className='w-6 h-8 bg-amber-500'></div>
                    <p className='text-[16px] text-amber-500'>Categories </p>
                </div>

                <h1 className="my-6 font-bold text-3xl md:text-4xl">Browse By Category</h1>

                <div className="grid grid-cols-2 md:grid-col-3 gap-6 lg:grid-cols-6 lg:items-center">
                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <BsPhone className="text-3xl" />
                        <p>Phone</p>
                    </article>

                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <HiOutlineDesktopComputer className="text-3xl" />
                        <p>Computer</p>
                    </article>

                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <IoWatchOutline className="text-3xl" />
                        <p>Smartwatch</p>
                    </article>

                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <BsCamera className="text-3xl" />
                        <p>Camera</p>
                    </article>

                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <GiHeadphones className="text-3xl" />
                        <p>Headphones</p>
                    </article>

                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <PiGameControllerThin className="text-3xl" />
                        <p>Gaming</p>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default Categories