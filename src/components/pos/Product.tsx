import React from 'react'
import { Product as prod } from '../../types/Product'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

type props={
    product:prod
}

function Product({product}:props) {
    const dispatch = useDispatch();

    const handleClick=()=>{
        dispatch(addToCart({product}));
    }
  return (
    <div className=' shadow-md bg-gray-100 cursor-pointer' onClick={handleClick}>
        <div className='flex justify-center items-center py-2 h-[120px] border border-b-gray-300'>
            <img src={product.image} alt="" className=' object-cover w-[120px]'/>
        </div>
        <h3 className=' text-center py-1 text-[16px] capitalize'>{product.title}</h3>
    </div>
  )
}

export default Product