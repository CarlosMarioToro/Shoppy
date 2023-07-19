// import { XMarkIcon } from "@heroicons/react/24/solid"
import { CalendarDaysIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types'

const OrdersCard = props => {
    const {date, totalPrice, totalProducts} = props;

    OrdersCard.propTypes = {
        date: PropTypes.node.isRequired,
        totalPrice: PropTypes.node.isRequired,
        totalProducts: PropTypes.node.isRequired,
    }

    return (
        <div className='flex justify-between items-center mb-4 border border-gray-400 w-80 h-20 rounded-md bg-gray-100 shadow-xl'>
            <p className='flex items-center justify-between grow gap-2 px-4'>
                <div>
                    <div className="flex gap-1">
                        <CalendarDaysIcon className='h-6 w-6'/>
                        <span>{date}</span>
                    </div>
                    <div className="flex gap-1">
                        <ShoppingBagIcon className='h-6 w-6' />
                        <span>{totalProducts} articles</span>
                    </div>

                </div>
                <div className="flex gap-1 items-center justify-center">
                    <span className='text-xl font-semibold'>$ {totalPrice}</span>
                </div>
            </p>
        </div>
    )
}

export default OrdersCard