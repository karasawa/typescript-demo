import { memo, useContext } from 'react';
import { AppContext } from '../../Provider/AppProvider';

const AddButton = memo(() => {
    const {inputName, todoArr, setTodoArr} = useContext(AppContext);

    const addTodoHandle = () => {
        console.log(todoArr);
        setTodoArr([...todoArr, inputName]);
    }

    return(
        <>
        <button onClick={addTodoHandle}>追加</button>  
        {todoArr.map((target) => (
            <li>{target}</li>
        ))}
        </>
    );
});
export default AddButton;