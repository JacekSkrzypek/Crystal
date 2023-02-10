import React, {useContext, useState} from "react";
import { PRODUCTS } from "./constant";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

    const [language, setLanguage] = useState(1); //0 - English  1 - Polish
    const [products, setProducts] = useState(PRODUCTS);

    const data = {
        language,
        products
    }
    
    return (
        <AppContext.Provider value={{data}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(AppContext);
    if(context === undefined) {
        throw new Error('useContext must be used within a appProvider');
    }
    return context;
}

export default {AppContext, AppProvider};