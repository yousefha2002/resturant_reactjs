import React ,{useState,ReactNode} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

type props = {
    children:ReactNode
}

export default function Layout({children}:props) {
const [isOpen, setIsOpen] = useState(false)
const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
}

    return (
        <>
        <Navbar onClick={toggleDrawer}/>
        <Sidebar isOpen={isOpen} onClick={toggleDrawer}/>
        {
            <div className='Container my-8'>
                {children}
            </div>
        }
        </>
    )
}