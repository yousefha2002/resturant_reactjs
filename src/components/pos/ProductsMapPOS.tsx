import React from 'react'
import Product from './Product'
import { products } from '../../data/products'

function ProductsMapPOS() {
      
  return (
    <div className=' grid grid-cols-5 gap-4'>
        {
            products.map(da=>{
                return <Product key={da.id} product={da}/>
            })
        }
    </div>
  )
}

export default ProductsMapPOS