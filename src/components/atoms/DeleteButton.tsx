import { memo, useContext } from 'react';
import { AppContext } from '../../Provider/AppProvider';

interface Props {
    todo: string;
    index: number;
}

const DeleteButton: React.VFC<Props> = memo(({todo, index}) => {
    const {imcompleteTodoArr, setImcompleteTodoArr} = useContext(AppContext);

    const deleteTodoHandle = () => {
        const newArr = imcompleteTodoArr.filter((target) => target !== todo);
        setImcompleteTodoArr(newArr);
    }
    return(
        <button onClick={deleteTodoHandle}>削除</button>
    );
});
export default DeleteButton;