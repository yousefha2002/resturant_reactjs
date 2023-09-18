import React from 'react'
import {TbTruckDelivery,TbHome2} from 'react-icons/tb'
import {RiWheelchairFill} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { setOrderWay } from '../../redux/cartSlice'

type props={
    setOpenTablesModel:React.Dispatch<React.SetStateAction<boolean>>
}

function POSOrderBar({setOpenTablesModel}:props) {
    const data =[ 
        {
            id:1,
            icon:TbTruckDelivery,
            title:"delivery",
            value:"delivery"
        },
        {
            id:2,
            icon:TbHome2,
            title:"take away",
            value:"take_away"
        },
        {
            id:3,
            icon:RiWheelchairFill,
            title:"din in",
            value:"din_in"
        }
    ]
    const dispatch = useDispatch();

    const handleClick=(val:string)=>{
        dispatch(setOrderWay({way:val}));
        if(val==="din_in"){
            setOpenTablesModel(true);
        }
    }

  return (
    <div className=' bg-bgMain p-2 flex items-center justify-center gap-4'>
        {
            data.map(da=>{
                return <div key={da.id} onClick={()=>handleClick(da.value)}
                className=' text-center bg-main text-white rounded-tl-[10px] rounded-br-[10px] h-[60px] 
                w-[70px] flex flex-col justify-center items-center cursor-pointer duration-300 hover:bg-transparent hover:border-main hover:border'>
                    <da.icon className='text-[24px]'/>
                    <h5 className='text-[13px] capitalize'>{da.title}</h5>
                </div>
            })
        }
    </div>
  )
}

export default POSOrderBar