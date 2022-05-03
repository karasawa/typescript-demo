import { memo } from 'react';
import InputField from '../organisms/InputFeild';
import AppProvider from '../../Provider/AppProvider';

const Home = memo(() => {
    return(
        <AppProvider>
            <InputField />
        </AppProvider>
    );
});
export default Home;