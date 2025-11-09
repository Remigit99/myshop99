
import PC from "../assets/images/hp_omen_desktop.png";
import { useGetProductsQuery } from "../store/features/products/productsApi";


const Cart = () => {

    const { data: products, error, isLoading } = useGetProductsQuery(10);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error fetching products</div>
    }

    return (
        <main className="mt-4">
            <div className="container mx-auto p-4 mb-6 min-h-screen">
                <h1 className="font-bold text-3xl sticky top-0 z-10 bg-white">Cart</h1>

                <div className="overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-col-4 gap-6">
                        <div className="md:grid-col-3 max-h-[70vh] relative overflow-y-auto ">

                            {
                                products.products?.map((product) => (


                                    <article key={product.id} className="py-4 border-b border-gray-300">
                                        {/* Products image,desc,price */}
                                        <div>
                                            <div className="flex justify-start gap-2">
                                                <div className="w-1/2" >
                                                    <img src={product.images} alt=""
                                                        className="h-full object-cover"
                                                    />

                                                </div>
                                                <div>
                                                    <h3 className="font-semibold mb-1">
                                                        Hp Elitebook 840 G6 Intel Core i5-16GB
                                                        RAM/1TB SSD/Backlight Keyboard/FP Reader
                                                        Wins 11 Pro
                                                    </h3>

                                                    <p className="text-gray-600">Variant: Z9911</p>

                                                    <div className="flex gap-2 md:hidden">
                                                        <h3>560,000.00</h3>
                                                        <div>
                                                            <h3 className="text-gray-500 line-through">698,899.00</h3>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:flex flex-col gap-0.5">
                                                <h3>560,000.00</h3>
                                                <div className="flex gap-2">
                                                    <h3 className="text-gray-500 line-through">560,000.00</h3>
                                                    <p className="bg-amber-100 text-amber-600">-20%</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Remove btn, increment & decrement btns  */}
                                        <div className="flex justify-between items-center mt-6">
                                            <div>

                                                <button className="text-amber-500 cursor-pointer">Remove</button>
                                            </div>
                                            <div className="flex justify-between gap-4 items-center">
                                                <button className="font-bold text-white cursor-pointer py-1 px-4 bg-amber-500 rounded-md">-</button>
                                                <span className="font-bold">1</span>
                                                <button className="font-bold text-white cursor-pointer py-1 px-4 bg-amber-500 rounded-md"> +</button>
                                            </div>
                                        </div>
                                    </article>
                                ))


                            }


                        </div>


                        <div className="md:grid-col-1 sticky bottom-0 z-10">
                            {/* Order Summary */}
                            {/* <div>Contact</div> */}
                            <div className="text-center">
                                <button className="bg-amber-500 rounded-md px-4 py-2
                                 text-white font-semibold text-xl cursor-pointer">
                                    Checkout (768,000)</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cart