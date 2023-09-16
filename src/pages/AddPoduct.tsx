import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Title from '../components/ui/Title';
import CustomInput from '../components/ui/CustomeInput';
import {useParams} from 'react-router-dom'
import {BiImageAdd} from 'react-icons/bi'


interface IFormCategory {
    title:string,
    price:number,
    categoryId:string
}

const categories=['hot','meat']

function AddProduct() {
    const {id} = useParams()
    const { handleSubmit, control, formState: { errors },register} = useForm<IFormCategory>({
        defaultValues: {
            title:""
        },
    });
    const [image,setImage] = useState<File>();

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
            <Title>{id?"Update":"Add"} Product</Title>
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
                <div className='flex flex-col mb-5'>
                    <label className='text-[16px] block mb-3'>Project Category</label>
                    <select
                    {...register("categoryId",{required:true})}
                    id="catgegories" className='bg-gray-50 border max-h-[100px] border-gray-300 text-gray-900 text-md duration-300 rounded-[2px] outline-none focus:ring-Primary focus:border-Primary block w-full px-2 py-1'>
                        {
                            categories.map(ca=>{
                                return <option className=' capitalize' key={ca} value={ca}>{ca}</option>
                            })
                        }
                    </select>
                    {errors.categoryId?.type==="required" && <p className='mt-2 text-[14px] text-red-600'>This Filed Is Required</p>}
                </div>
                <div className='mb-5'>
                <CustomInput
                label='Price'
                name="price"
                control={control}
                rules={{ required: 'This field is required' }}
                error={errors.price?.message}
                defaultValue={id ? undefined : ''} // Set defaultValue based on the presence of id
                type='number'
                />
                </div>
                <div className='mb-8'>
                <div className="mb-[10px]">
                    <label htmlFor='images'>
                        <div className='flex items-center w-full gap-x-2 justify-center h-[80px] border-[1px] border-gray-500 border-dashed'>
                            <h5 className='text-[15px] font-[600]'>Pick Image</h5>
                            <div><BiImageAdd className='text-[22px]'/></div>
                        </div>
                    </label>
                    <input onChange={(e)=>(e.target.files && setImage(e.target.files[0] ))} hidden type='file' id="images" accept="image/png, image/jpeg" />
                    <hr/>
                    </div>
                    {image && <div className='h-[200px] overflow-y-auto'><img src={URL.createObjectURL(image)} alt='' className='w-full'/></div>}
                </div>
                <button className='w-full bg-primary text-white bg-main rounded-[6px] py-1 duration-200 hover:opacity-80'>
                    {id ? 'Update' : 'Save'}
                </button>
            </form>
        </div>
    </div>
    )
}

export default AddProduct