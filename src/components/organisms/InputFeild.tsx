import { memo, useContext } from 'react';
import Button from '../atoms/Button';
import Form from '../atoms/Form';
import { AppContext } from '../../Provider/AppProvider';

const InputField = memo(() => {
    const context = useContext(AppContext);
    console.log(context)
    return (
        <div>
            <Form />
            <Button />
        </div>
    );
});
export default InputField;