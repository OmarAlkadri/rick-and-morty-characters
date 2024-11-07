import { useForm } from 'react-hook-form';
import { useFilterStore } from '@/stores/filterStore';
import { useQueryClient } from 'react-query';
import { useState, useEffect } from 'react';

type FormData = {
    status: string;
    gender: string;
};

const FilterForm = () => {
    const { status, gender, setStatus, setGender } = useFilterStore();
    const { register, handleSubmit, watch } = useForm<FormData>({
        defaultValues: { status, gender },
    });
    const queryClient = useQueryClient();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const formValues = watch();

    useEffect(() => {
        if (formValues.status && formValues.gender) {
            handleSubmit(onSubmit)();
        }
    }, [formValues.status, formValues.gender]);

    const statusOptions = ['alive', 'dead', 'unknown'];
    const genderOptions = ['male', 'female', 'genderless', 'unknown'];

    const onSubmit = (data: FormData) => {
        console.log(data);
        if (!data.status || !data.gender) {
            setErrorMessage('Please select both status and gender.');
            return;
        }
        setStatus(data.status);
        setGender(data.gender);
        queryClient.invalidateQueries('characters');
        setErrorMessage(null);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8 space-y-4">
            <div className='flex items-center gap-x-2'>
                <label htmlFor="status">Status</label>
                <select
                    {...register('status')}
                    id="status"
                    className="p-2 border rounded border-black dark:border-white"
                >
                    {statusOptions.map((option) => (
                        <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex items-center gap-x-2'>
                <label htmlFor="gender">Gender</label>
                <select
                    {...register('gender')}
                    id="gender"
                    className="p-2 border rounded border-black dark:border-white"
                >
                    {genderOptions.map((option) => (
                        <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
                type="submit"
                className="text-gray-900 bg-white border border-gray-300 border-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
                Apply Filters
            </button>
        </form>
    );
};

export default FilterForm;
