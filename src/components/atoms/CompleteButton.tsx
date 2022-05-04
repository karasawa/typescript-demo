import { memo, useContext } from 'react';
import { AppContext } from '../../Provider/AppProvider';

interface Props {
    todo: string;
    index: number;
}

const CompleteButton:React.VFC<Props> = memo(({todo, index}) => {
    const {imcompleteTodoArr, setImcompleteTodoArr, completeTodoArr, setCompleteTodoArr} = useContext(AppContext);

    const completeTodoHandle = () => {
        const newArr = imcompleteTodoArr.filter((target) => target !== todo);
        setImcompleteTodoArr(newArr);
        setCompleteTodoArr([...completeTodoArr, todo]);
    }

    return(
        <button onClick={completeTodoHandle}>完了</button>
    );
});
export default CompleteButton;