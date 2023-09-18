import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { removeFromCart } from '../../redux/cartSlice';

function OrderPOS() {
    const {products,orderWay} = useSelector((s:RootState)=>s.cart);
    const dispatch = useDispatch();

    const handleClick=(id:number)=>{
        dispatch(removeFromCart({id}));
    }
    
    const TableHeader=()=>{
        return <thead className=' bg-slate-300 w-full'>
            <th className='text-[14px] font-[600] p-1'>SR#</th>
            <th className='text-[14px] font-[600] p-1'>Product Name</th>
            <th className='text-[14px] font-[600] p-1'>Qty</th>
            <th className='text-[14px] font-[600] p-1'>price</th>
            <th className='text-[14px] font-[600] p-1'>Amount</th>
            <th className='text-[14px] font-[600] p-1'>Remove</th>
        </thead>
    }
  return (
   <div className=' h-full flex flex-col'>
     <div className='flex-[6] overflow-y-auto'>
     <table className='w-full'>
        <TableHeader/>
        <tbody>
            {
                products.map((prod,index)=>{
                    return <tr className={`${index%2===0?" bg-slate-200":" bg-slate-300"} py-1 text-center  h-fit`}>
                    <td className='text-[14px]'>{prod.id}</td>
                    <td className='text-[14px]'>{prod.title}</td>
                    <td className='text-[14px]'>{prod.qty}</td>
                    <td className='text-[14px]'>{prod.price}</td>
                    <td className='text-[14px]'>{prod.qty * prod.price}</td>
                    <td className='text-[14px] cursor-pointer' onClick={()=>handleClick(prod.id)}>
                        <MdDelete className='text-[18px] text-red-700 mx-auto'/>
                    </td>
                </tr>
                })
            }
        </tbody>
      </table>
     </div>
    {
        products.length>0&&
        <div className='flex-1 flex items-center justify-center gap-2'>
            <button className=' bg-green-700 text-white w-[100px] text-center h-[30px] rounded duration-200 hover:bg-opacity-75'>Save</button>
            <button className=' bg-bgMain text-white w-[100px] text-center h-[30px] rounded duration-200 hover:bg-opacity-75'>Print</button>
        </div>
    }
   </div>
  )
}

export default OrderPOS