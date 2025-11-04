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

                <div className="flex justify-between items-center">
                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <BsPhone />
                        <p>Phone</p>
                    </article>

                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <HiOutlineDesktopComputer />
                        <p>Computer</p>
                    </article>

                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <IoWatchOutline />
                        <p>Smartwatch</p>
                    </article>

                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <BsCamera />
                        <p>Camera</p>
                    </article>

                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <GiHeadphones />
                        <p>Headphones</p>
                    </article>

                    <article className="flex justify-center items-center flex-col gap-4 bg-gray-50 rounded-2xl py-8 px-12">
                        <PiGameControllerThin />
                        <p>Gaming</p>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default Categories