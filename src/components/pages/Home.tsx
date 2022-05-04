import { memo } from 'react';
import InputField from '../organisms/InputFeild';
import AppProvider from '../../provider/AppProvider';
import ImcompleteField from '../organisms/ImcompleteField';
import CompleteField from '../organisms/CompleteField';

const Home = memo(() => {
    return(
        <AppProvider>
            <InputField />
            <ImcompleteField />
            <CompleteField />
        </AppProvider>
    );
});
export default Home;