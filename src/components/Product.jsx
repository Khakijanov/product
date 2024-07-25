import React, { useEffect, useState } from 'react'
// img
import Cart from '../../public/assets/images/icon-add-to-cart.svg'
import Plus from '../../public/assets/images/icon-increment-quantity.svg'
import Minus from '../../public/assets/images/icon-decrement-quantity.svg'
// redux
import { useSelector } from 'react-redux'
import { decrementOrder, incrementOrder,  } from '../features/dessertSlice'

import { useDispatch } from 'react-redux'

function Product({dessert}) {
  const data = useSelector((state)=>state.order);
  const dispatch = useDispatch()



    const [addButton, setAddButton] = useState(false)
    useEffect(()=>{
      if(dessert.amount == 0){
        setAddButton(false)
      }
    }, [dessert.amount])
  return (
    <div className='lg:w-[31.5%] md:w-[31%] w-full text-left rounded-xl'>
   <div className='mb-[38px] relative w-full'>
   <img src={dessert.image.desktop} alt="shrinliklar" className='rounded-xl h-full w-full'/>
        
   {!addButton && <button onClick={()=> {
    setAddButton(true)
    dispatch((incrementOrder(dessert.id)))
    
   }} className='absolute w-[55%] md:w-[70%] text-[15px] md:text-center flex items-center justify-center gap-1 bg-bgColor  rounded-full px-3 font-semibold text-titleColor py-2 -mb-5 bottom-0 left-1/2 transform -translate-x-1/2 border border-textColor text-center '>
   <img src={Cart} alt="" />
   Add to Cart</button>}
   {addButton && <div className='absolute w-[55%] md:w-[70%] text-[15px] md:text-center flex items-center justify-between gap-1 bg-secondaryColor  rounded-full px-3 font-semibold text-titleColor py-2 -mb-5 bottom-0 left-1/2 transform -translate-x-1/2 border border-secondaryColor text-center '>
   <img src={Minus} onClick={()=> dispatch(decrementOrder(dessert.id))} className='py-3 px-2 rounded-full border cursor-pointer border-white' alt="" />
   <span className='text-white'>{dessert.amount}</span>
   <img src={Plus} onClick={()=>dispatch((incrementOrder(dessert.id)))}  className='p-2 rounded-full border border-white cursor-pointer'  alt="" />
   </div>}
   </div>
        <span className='text-textColor trxt-[18.52px]'>{dessert. category}</span>
        <h1 className='titleColor text-[21px] line-clamp-1'>{dessert.name}</h1>
        <span className='text-secondaryColor font-semibold'>{`$${dessert.price}.00`}</span>
    </div>
  )
}

export default Product