import React, {useContext, useState} from "react";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

    const [language, setLanguage] = useState(0); //0 - English  1 - Polish

    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(AppContext);
    if(context === undefined) {
        throw new Error('useContext must be used within a appProvider');
    }
}

export default {AppContext, AppProvider};