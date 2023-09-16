export type TableColumn<T> = {
    header: string;
    accessor: keyof T;
}