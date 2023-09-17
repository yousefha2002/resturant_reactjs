import React from 'react'
import { TableColumn } from '../../types/TableColumn';
import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';
import AddButton from '../ui/AddButton';
import ReusableTable from '../ui/ReusableTable';
import { Employee } from '../../types/employee';

const data:Employee[] = [
    {id:1,name:"Yousef",phone:"1234",address:"Gaza",role:"waiter"},
    {id:1,name:"Yousef",phone:"1234",address:"Gaza",role:"waiter"}
]

const columns: TableColumn<Employee>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Address', accessor: 'address' },
    { header: 'Role', accessor: 'role' }
];

export default function Employees() {

    const navigate = useNavigate()
    function handleUpdate(id:number)
    {
        navigate(`/update-employee/${id}`)
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
                <Title>Employees</Title>
                <AddButton link={'add-employee'}/>
            </div>
            <ReusableTable
            data={data}
            columns={columns}
            renderButtons={renderButtons}
            />
        </div>
    )
}