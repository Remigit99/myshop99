import { FaStar } from "react-icons/fa"
import { CiShoppingCart, CiHeart } from "react-icons/ci"

const ProductCard = ({ description, images, price, rating, title, discountPercentage }) => {
    return (
        <div className='group relative bg-gray-50 transition-all duration-300 overflow-hidden hover:shadow border-0 rounded-xl ' >
            <div className="flex justify-center items-center">
                <img src={images} alt={title} className='w-[160px] h-[160px] ' />
            </div>
            <div className=' flex flex-col space-y-1 px-2 py-1 bg-gray-100 '>
                <h3 className='font-medium text-[16px]'>{title}</h3>
                <p className='text-[14px] text-gray-700'>{description.length > 30 ? description.substring(0, 35) + "..." : description}</p>
                <p className="text-amber-600">${price}</p>
                <span className="flex items-center gap-2 text-[14px]"> <FaStar className="text-amber-600" />  {rating}</span>
                <p className="absolute top-2 left-2 py-1 px-2 text-[14px] bg-amber-500 font-bold text-white rounded-md">{Math.floor(discountPercentage)}%</p>
            </div>

            <div>

                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-2 right-2 flex flex-col gap-4">
                    <CiShoppingCart className="text-3xl text-gray-700 hover:text-amber-500 cursor-pointer" />
                    <CiHeart className="text-3xl text-gray-700 hover:text-amber-500 cursor-pointer" />
                </span>

            </div>

        </div>
    )
}

export default ProductCard