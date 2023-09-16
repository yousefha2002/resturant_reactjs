import { AiOutlineMenu } from 'react-icons/ai';
import {Link} from 'react-router-dom'

type props = {
    onClick:()=>void
}

export default function Navbar({onClick}:props) {
    return (
        <div className='border-gray-200 shadow bg-white '>
            <nav className="Container">
                <div className="flex flex-wrap items-center justify-between mx-auto py-4 Container">
                    <div className='flex items-center gap-x-3'>
                        <button onClick={onClick}><AiOutlineMenu className='text-[20px] text-main'/></button>
                        <Link to="" className="flex items-center">
                            <h2 className="self-center font-bold text-[20px] whitespace-nowrap text-main">
                                Resturant
                            </h2>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}