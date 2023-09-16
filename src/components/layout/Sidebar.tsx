import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {MdWorkspacesFilled} from 'react-icons/md';
import {BiSolidCategory} from 'react-icons/bi';
import TopicBox from './TopicBox';

type props = {
    isOpen:boolean,
    onClick:()=>void
    }

    export default function Sidebar({isOpen,onClick}:props) {

    const topics = 
    [
        {
            title:"Dashboard",
            link:"",
            icon:MdWorkspacesFilled
        },
        {
            title:"Categories",
            link:"categories",
            icon:BiSolidCategory
        },
        {
            title:"Products",
            link:"",
            icon:MdWorkspacesFilled
        },
        {
            title:"Tables",
            link:"",
            icon:MdWorkspacesFilled
        },
    ]

    return (
        <>
        <Drawer
            style={{padding:"60px 20px",backgroundColor:"#353d5d"}}
            size={270}
            open={isOpen}
            onClose={onClick}
            direction="left"
            >
            {
            topics.map((item,index)=><TopicBox key={index} item={item}/>)
            }
        </Drawer>
        </>
    )
}