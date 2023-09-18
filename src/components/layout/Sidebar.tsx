import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {MdWorkspacesFilled,MdProductionQuantityLimits,MdSoupKitchen} from 'react-icons/md';
import {BiSolidCategory,BiSolidUser} from 'react-icons/bi';
import {GiTable} from 'react-icons/gi';
import {BsFillCalculatorFill} from 'react-icons/bs';
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
            link:"products",
            icon:MdProductionQuantityLimits
        },
        {
            title:"Tables",
            link:"tables",
            icon:GiTable
        },
        {
            title:"Staff",
            link:"staff",
            icon:BiSolidUser
        },
        {
            title:"POS",
            link:"pos",
            icon:BsFillCalculatorFill
        },
        {
            title:"Kitchen",
            link:"kitchen",
            icon:MdSoupKitchen
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