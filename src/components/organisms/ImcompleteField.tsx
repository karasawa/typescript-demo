import { memo, useContext } from 'react';
import { AppContext } from '../../Provider/AppProvider';
import CompleteButton from '../atoms/CompleteButton';
import DeleteButton from '../atoms/DeleteButton';

const ImcompleteField = memo(() => {
    const {imcompleteTodoArr} = useContext(AppContext);
    return(
        <div>
            <h4>未完了のTODO</h4>
            {imcompleteTodoArr.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <DeleteButton todo={todo} index={index} />
                    <CompleteButton  todo={todo} index={index} />
                </li>
            ))}
        </div>
    );
});
export default ImcompleteField;