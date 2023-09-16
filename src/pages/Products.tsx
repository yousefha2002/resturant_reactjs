import React from 'react';
import Title from '../components/ui/Title';
import AddButton from '../components/ui/AddButton';
import ReusableTable from '../components/ui/ReusableTable';
import { TableColumn } from '../types/TableColumn';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/Product';

const data: Product[] = [];

const columns: TableColumn<Product>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Title', accessor: 'title' },
    { header: 'Price', accessor: 'price' },
];

export default function Products() {
    const navigate = useNavigate();

    function handleUpdate(id: number) {
        navigate(`/update-product/${id}`);
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
                <Title>Products</Title>
                <AddButton link={'add-product'} />
            </div>
            <ReusableTable
                data={data}
                columns={columns}
                renderButtons={renderButtons}
            />
        </div>
    );
}