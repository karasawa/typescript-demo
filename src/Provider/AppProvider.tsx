import { useState, createContext, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

// export const AppContext = createContext<{} | undefined>(undefined);
export const AppContext = createContext({} as {
    inputName: string,
    setInputName: React.Dispatch<React.SetStateAction<string>>,
    todoArr: Array<string>,
    setTodoArr: React.Dispatch<React.SetStateAction<Array<string>>>,
});

const AppProvider: React.VFC<Props> = ({children}) => {

    const [inputName, setInputName] = useState('');
    const [todoArr, setTodoArr] = useState<string[]>([]);

    return (
        <AppContext.Provider value={{inputName, setInputName, todoArr, setTodoArr}}>
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;