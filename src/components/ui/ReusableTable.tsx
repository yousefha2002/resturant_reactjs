import React from 'react';
import { TableColumn } from '../../types/TableColumn';

interface TableProps<T> {
    data: T[];
    columns: TableColumn<T>[];
    onUpdate: (id: number) => void;
}

export default function ReusableTable<T extends { id: number }>({ columns, data, onUpdate }: TableProps<T>) {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((item, index) => {
                            return (
                                <th scope="col" key={index} className="px-6 py-3">
                                    {item.header}
                                </th>
                            );
                        })}
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b">
                            {columns.map((column, colIndex) => (
                                <td
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    key={String(column.accessor)}
                                >
                                    {item[column.accessor] as React.ReactNode}
                                </td>
                            ))}
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <button
                                    className="ml-2 text-blue-500 hover:text-blue-700"
                                    onClick={() => onUpdate(item.id)}
                                >
                                    Update
                                </button>
                                <button className="ml-2 text-red-500 hover:text-red-700">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}