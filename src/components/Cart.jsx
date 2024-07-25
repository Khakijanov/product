import React from 'react'
// img
import EmptyCart from '../../public/assets/images/illustration-empty-cart.svg'
// redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../features/dessertSlice';

function Cart() {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteOrder(id));
    }

    const {ordered, orderTotal, totalProducts} = useSelector((state)=>state.order);
    console.log(ordered)
  return (
    <div className='lg:w-[27%] md:w-full w-full  bg-white z-10 p-6 rounded-3xl'>
        <div className='w-full'>
        <h1 className='text-secondaryColor text-[31.75px] text-left font-semibold'>Your Cart {`${orderTotal}`}</h1>
        {orderTotal && <div className='flex flex-col items-start justify-start gap-3  '>
            {ordered.map((item)=>{
                return <div key={item.id} className='w-full'>
                    <p >{item.name}</p>
                    <div className='flex items-center justify-between w-full'>
                    <img src={item.image.thumbnail} width={50} alt="" />
                    <span className='text-secondaryColor'>{item.amount}</span>
                        <span>${item.price}.00</span>
                        <span onClick={()=>handleDelete(item.id)} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </span>
                    </div>
                </div>
            })}
        </div> }
        {!orderTotal && <div>
        <div className='grid place-items-center mt-[40px]'>
            <img src={EmptyCart} alt="" />
        </div>
       <h4 className='text-textColor'>Your added items will appear here</h4>
        </div>}
        <h1 className='flex justify-between items-center text-titleColor '>Order Total: <span className='text-[31px] text-titleColor font-semibold'> ${ totalProducts}</span></h1> 
        
        </div>
    </div>
  )
}

export default Cart 