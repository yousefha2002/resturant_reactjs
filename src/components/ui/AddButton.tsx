import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type props = {
    link : string
}

export default function AddButton({link}:props) {
    return (
        <Link to={`/${link}`}>
            <div className='flex justify-center items-center w-[40px] h-[40px] bg-main rounded-[4px]'>
                <AiOutlinePlus className='text-white text-[20px]'/>
            </div>
        </Link>
    )
}
