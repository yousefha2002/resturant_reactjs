import React from 'react'
import Title from '../components/ui/Title'
import AddButton from '../components/ui/AddButton'
import ReusableTable from '../components/ui/ReusableTable'
import {Category} from '../types/category'
import { TableColumn } from '../types/TableColumn'
import {useNavigate} from 'react-router-dom'

const data:Category[] = [{id:1,title:"Food"},{id:2,title:"Drinks"}]

const columns: TableColumn<Category>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Title', accessor: 'title' },
];

export default function Categories() {

    const navigate = useNavigate()
    function handleUpdate(id:number)
    {
        navigate(`/update-category/${id}`)
    }

    const renderButtons = (id:number) => (
        <>
            <button key="update-button" className="ml-2 text-blue-500 hover:text-blue-700" onClick={() => handleUpdate(id)}>Update</button>
            <button key="delete-button" className="ml-2 text-red-500 hover:text-red-700">Delete</button>
        </>
    );

    return (
        <div>
            <div className='flex justify-between items-center mb-4'>
                <Title>Categories</Title>
                <AddButton link={'add-category'}/>
            </div>
            <ReusableTable
            data={data}
            columns={columns}
            renderButtons={renderButtons}
            />
        </div>
    )
}