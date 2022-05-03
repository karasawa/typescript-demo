import { useState, createContext, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const AppContext = createContext<{} | undefined>(undefined);

const AppProvider: React.VFC<Props> = ({children}) => {

    const [inputName, setInputName] = useState('yyyy');

    return (
        <AppContext.Provider value={{inputName}}>
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;