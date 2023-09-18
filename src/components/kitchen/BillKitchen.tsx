import React from 'react'

function BillKitchen() {
  return (
    <div className='border border-gray-500'>
        <div className=' bg-bgMain text-white p-4'>
            <h4 className='mb-1'>Bill No : 1</h4>
            <h4 className='mb-1'>Table : Table 1</h4>
            <h4 className='mb-1'>Bill Timing : 03:50pm</h4>
            <h4 className='mb-1'>Bill Type : Dine In</h4>
        </div>
        <div className=' p-4 text-bgMain'>
            <p>1 - Double Zinger -- 1</p>
            <p>2 - Double Zinger -- 4</p>
            <p>3 - Double Zinger -- 2</p>
            <p>4 - Double Zinger -- 8</p>
        </div>
        <div>
            <button className='w-[100px] mx-auto block bg-main text-white h-[36px] rounded-[20px]'>Print</button>
            <button className='w-[100px] mx-auto block bg-main text-white h-[36px] rounded-[20px] my-3'>Complete</button>
        </div>
    </div>
  )
}

export default BillKitchen