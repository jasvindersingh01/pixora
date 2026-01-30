import { useState, createContext, use } from "react";

export const AppContext = createContext();

export default function AppContextProvider(props) {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);

    const value = {
        user, setUser, showLogin, setShowLogin,
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}