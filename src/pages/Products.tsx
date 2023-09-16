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
        navigate(`/update-category/${id}`);
    }

    return (
        <div>
            <div className='flex justify-between items-center mb-4'>
                <Title>Products</Title>
                <AddButton link={'add-product'} />
            </div>
            <ReusableTable
                data={data}
                columns={columns}
                onUpdate={handleUpdate}
            />
        </div>
    );
}