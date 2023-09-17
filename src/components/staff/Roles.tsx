import React from 'react'
import { Role } from '../../types/role'
import { TableColumn } from '../../types/TableColumn';
import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';
import AddButton from '../ui/AddButton';
import ReusableTable from '../ui/ReusableTable';

const data:Role[] = [{id:1,title:"Cashier"},{id:2,title:"Waiter"}]

const columns: TableColumn<Role>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Title', accessor: 'title' },
];

export default function Roles() {

    const navigate = useNavigate()
    function handleUpdate(id:number)
    {
        navigate(`/update-role/${id}`)
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
                <Title>Roles</Title>
                <AddButton link={'add-role'}/>
            </div>
            <ReusableTable
            data={data}
            columns={columns}
            renderButtons={renderButtons}
            />
        </div>
    )
}