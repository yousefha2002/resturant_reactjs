import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Title from '../components/ui/Title';
import CustomInput from '../components/ui/CustomeInput';
import {useParams} from 'react-router-dom'

interface IFormCategory {
    title:string
}

function AddCategory() {
    const {id} = useParams()
    const { handleSubmit, control, formState: { errors },} = useForm<IFormCategory>({
        defaultValues: {
            title:""
        },
    });

    const { mutateAsync, isLoading } = useMutation(id ? handleUpdate : handleAdd);
    const onSubmit: SubmitHandler<IFormCategory> = (data) => mutateAsync(data)
    

    async function handleAdd(dataForm:IFormCategory)
    {
        console.log(dataForm)
    }

    async function handleUpdate(dataForm:IFormCategory)
    {
        console.log(dataForm)
    }

    return (
    <div className='grid grid-cols-12'>
        <div className=' col-span-12 md:col-span-4'>
            <Title>{id?"Update":"Add"} Category</Title>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[95%] mx-auto my-5'>
                <div className='mb-5'>
                <CustomInput
                label='Title'
                name='title'
                control={control}
                rules={{ required: 'This field is required' }}
                error={errors.title?.message}
                defaultValue={id ? undefined : ''} // Set defaultValue based on the presence of id
                />
                </div>
                <button className='w-full bg-primary text-white bg-main rounded-[6px] py-1 duration-200 hover:opacity-80'>
                    {id ? 'Update' : 'Save'}
                </button>
            </form>
        </div>
    </div>
    )
}

export default AddCategory