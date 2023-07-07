import { ChangeEvent, useState } from 'react';

interface useFormProps {
    initialValue: object | string;
}

function useForm(initialValue: object) {
    // initial State
    const [values, setValues] = useState(initialValue);
    //handle on change input
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };
    // reset form input
    const resetForm = () => {
        setValues(initialValue);
    };
    //
    return [values, handleChange, resetForm];
}

export default useForm;
