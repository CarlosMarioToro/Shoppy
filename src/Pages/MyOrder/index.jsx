import { useContext } from "react";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MyOrder() {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    if (index === 'last') {
        index = context.order?.length - 1
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-5'>
                <Link to='/myorders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
                </Link>
                <h1>My Order</h1>
            </div>
            <div className='flex flex-col w-80'>
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}
                        />
                        ))
                }
            </div>
            <div className='flex w-80 mt-4'>
                <p className='flex w-full items-center justify-between'>
                    <span className='font-normal text-xl'>Total: </span>
                    <span className='font-medium text-2xl pr-2'>${context.order?.[index]?.totalPrice}</span>
                </p>
            </div>
        </Layout>
    )
}

export default MyOrder