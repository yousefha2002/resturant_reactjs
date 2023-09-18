import React from 'react'
import BillKitchen from '../components/kitchen/BillKitchen'

function Kitchen() {
  return (
    <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
    {
    [1,2,3,4,5,6,7,8].map((item,index)=>{
        return <BillKitchen key={index}/>
    })
    }
    </div>
  )
}

export default Kitchen