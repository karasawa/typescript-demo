import { memo, useContext } from 'react';
import { AppContext } from '../../provider/AppProvider';

const Form = memo(() => {
    const {inputName, setInputName} = useContext(AppContext);
    return (
        <input value={inputName} onChange={(e) => setInputName(e.target.value)} />
    );
});
export default Form;