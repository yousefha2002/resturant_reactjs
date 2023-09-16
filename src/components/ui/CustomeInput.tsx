import { Controller } from "react-hook-form";
import { CustomInputProps } from "../../types/CustomInputProps";

const CustomInput: React.FC<CustomInputProps> = ({
        label,
        name,
        control,
        rules,
        error,
        placeholder,
        defaultValue,
        type = 'text', // Default to text input
    }) => {
        return (
        <div className='mb-5'>
            <label className='Label'>{label}</label>
            <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue || ''}
            render={({ field }) => (
                <input
                type={type}
                placeholder={placeholder || label} // Use label as placeholder by default
                {...field}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-md duration-300 rounded-[2px] outline-none focus:ring-main focus:border-main block w-full px-2 py-1'
                />
            )}
            />
            {error && (
            <p className='text-red-600 text-[14px] mt-1'>{error}</p>
            )}
        </div>
        );
    };
export default CustomInput;