import React from 'react'
import { useDispatch } from 'react-redux';
import { setTableId } from '../../redux/cartSlice';

type props={
    setOpenTablesModel:React.Dispatch<React.SetStateAction<boolean>>
}

function TablesDialog({setOpenTablesModel}:props) {
    const data=[
        {id:1,name:"table1"},{id:2,name:"table2"},{id:3,name:"table3"},{id:4,name:"table4"},{id:5,name:"table5"},{id:6,name:"table6"},
        {id:7,name:"table7"},{id:8,name:"table8"},{id:9,name:"table9"},{id:10,name:"table10"},{id:11,name:"table11"},{id:12,name:"table12"}
    ];
 
    const dispatch = useDispatch();

    const handleChooseTable=(id:number)=>{
        dispatch(setTableId({tableId:id}));
        setOpenTablesModel(false);
    }

  return (
    
<div id="defaultModal" tabIndex={-1} aria-hidden="true" className=" absolute top-[20%] left-[20%]  z-50 p-4 overflow-x-hidden">
    <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-90">
                    Select
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-6 grid grid-cols-6 gap-2 w-[600px] items-center">
               {
                data.map(da=>{
                    return <div key={da.id} onClick={()=>handleChooseTable(da.id)}
                    className=' bg-main h-[36px] flex items-center justify-center cursor-pointer duration-200 hover:bg-bgMain hover:text-white'>
                        <h5 className='text-[14px] capitalize'>{da.name}</h5>
                    </div>
                })
               }
            </div>
        </div>
    </div>
</div>

  )
}

export default TablesDialog