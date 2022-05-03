import { memo } from 'react';
import AddButton from '../atoms/AddButton';
import Form from '../atoms/Form';

const InputField = memo(() => {
    return (
        <div>
            <Form />
            <AddButton />
        </div>
    );
});
export default InputField;