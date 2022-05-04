import { memo, useContext } from 'react';
import { AppContext } from '../../provider/AppProvider';

const AddButton = memo(() => {
    const {inputName, setInputName, imcompleteTodoArr, setImcompleteTodoArr} = useContext(AppContext);

    const addTodoHandle = () => {
        setImcompleteTodoArr([...imcompleteTodoArr, inputName]);
        setInputName('');
    }

    return(
        <>
        <button onClick={addTodoHandle}>追加</button>  
        </>
    );
});
export default AddButton;