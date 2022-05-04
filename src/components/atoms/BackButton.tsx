import { memo, useContext } from 'react';
import { AppContext } from '../../Provider/AppProvider';

interface Props {
    todo: string;
    index: number;
}

const BackButton:React.VFC<Props> = memo(({todo, index}) => {
    const {imcompleteTodoArr, setImcompleteTodoArr, completeTodoArr, setCompleteTodoArr} = useContext(AppContext);

    const backTodoHandle = () => {
        const newArr = completeTodoArr.filter((target) => target !== todo);
        setCompleteTodoArr(newArr);
        setImcompleteTodoArr([...imcompleteTodoArr, todo]);
    }

    return(
        <button onClick={backTodoHandle}>戻す</button>
    );
});
export default BackButton;