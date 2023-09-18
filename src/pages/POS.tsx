import React, { useState } from 'react'
import PosCategorySide from '../components/pos/PosCategorySide'
import ProductsMapPOS from '../components/pos/ProductsMapPOS'
import OrderPOS from '../components/pos/OrderPOS'
import POSOrderBar from '../components/pos/POSOrderBar'
import TablesDialog from '../components/pos/TablesDialog'

function POS() {
  const [openTablesModel,setOpenTablesModel] = useState(false); 
  return (
    <div className=' h-[75vh] relative'>
        <div>
          <POSOrderBar setOpenTablesModel={setOpenTablesModel}/>
          {openTablesModel && <TablesDialog setOpenTablesModel={setOpenTablesModel}/>}
        </div>
        <div className='grid grid-cols-12 gap-2 h-full'>
            <div className=' col-span-1 p-2 border border-gray-600 h-full overflow-y-auto'>
              <PosCategorySide/>
            </div>
            <div className=' col-span-8 p-2 border border-gray-600 h-full overflow-y-auto'>
              <ProductsMapPOS/>
            </div>
            <div className=' col-span-3 border border-gray-600 h-full overflow-y-auto'>
              <OrderPOS/>
            </div>
        </div>
    </div>
  )
}

export default POS