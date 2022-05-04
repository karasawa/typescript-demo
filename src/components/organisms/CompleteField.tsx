import { memo, useContext } from 'react';
import { AppContext } from '../../provider/AppProvider';
import BackButton from '../atoms/BackButton';

const CompleteField = memo(() => {
    const {completeTodoArr} = useContext(AppContext);
    return(
        <div>
            <h4>完了したTODO</h4>
            {completeTodoArr.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <BackButton todo={todo} index={index} />
                </li>
            ))}
        </div>
    );
});
export default CompleteField;