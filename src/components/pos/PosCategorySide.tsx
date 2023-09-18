import React from 'react'
import { motion } from "framer-motion"

function PosCategorySide() {

    const data =["drinks","burgers","pizza"];
  return (
    <div>
        <motion.button 
        whileHover={{scale:0.97}} whileTap={{scale:1.1}} transition={{duration:0.3}}
        className='block bg-bgMain text-white py-2 text-center mb-2 w-full text-[14px]'>All Categories</motion.button>
        {
            data.map(da=>{
                return <motion.button 
                whileHover={{scale:0.97}} whileTap={{scale:1.1}} transition={{duration:0.3}}
                className='block bg-bgMain text-white py-2 text-center mb-2 w-full text-[14px] capitalize' key={da}>{da}</motion.button>
            })
        }
    </div>
  )
}

export default PosCategorySide