import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice, dateTime } from '../Utils'
import './CheckoutSideMenu.css'
import OrderCard from '../OrderCard'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.cartProducts.length - 1);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: dateTime(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0);
        context.setSearchByTitle(null)
    }

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-5'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                <XMarkIcon 
                    className='h-6 w-6 text-black/80 cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-6 flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                        ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/myorders/last'>
                    <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckout() }>Checkout</button>                
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu