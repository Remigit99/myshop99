import { useGetProductsQuery } from "../../store/features/products/productsApi"

const BestSelling = () => {
    const { data: products = [], isLoading, error } = useGetProductsQuery(20);
  
  if(isLoading){
    return   <div className="flex justify-center items-center"> <h2>Loading...</h2> </div>
  }

  if(error){
    return   <div className="flex justify-center items-center"> <h2>Something went wrong!</h2> </div>
  }
  
    return (
    <section>
        <div className="container mx-auto">
            <div className='flex flex-start items-center gap-4'>
                    <div className='w-6 h-8 bg-amber-500'></div>
                    <p className='text-[16px] text-amber-500'>Categories </p>
                </div>

            <h1>Best Seeling Products</h1>

            <div>
                {
                    products?.products.slice(9, 15).map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default BestSelling