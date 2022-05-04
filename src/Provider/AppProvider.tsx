import { useState, createContext, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

// export const AppContext = createContext<{} | undefined>(undefined);
export const AppContext = createContext({} as {
    inputName: string,
    setInputName: React.Dispatch<React.SetStateAction<string>>,
    imcompleteTodoArr: Array<string>,
    setImcompleteTodoArr: React.Dispatch<React.SetStateAction<Array<string>>>,
    completeTodoArr: Array<string>,
    setCompleteTodoArr: React.Dispatch<React.SetStateAction<Array<string>>>,
});

const AppProvider: React.VFC<Props> = ({children}) => {

    const [inputName, setInputName] = useState<string>('');
    const [imcompleteTodoArr, setImcompleteTodoArr] = useState<string[]>([]);
    const [completeTodoArr, setCompleteTodoArr] = useState<string[]>([]);

    return (
        <AppContext.Provider value={{inputName, setInputName, imcompleteTodoArr, setImcompleteTodoArr, completeTodoArr, setCompleteTodoArr}}>
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;