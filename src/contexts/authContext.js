import { createContext, useContext } from 'react';

import useProvideAuth from '../hooks/useProvideAuth';

const authContext = createContext(null);

//wrapper
function AuthProvider({ children }) {
    const auth = useProvideAuth();
    
    return (
        <authContext.Provider value={auth} >
            {children}
        </authContext.Provider>
    )
}

function useAuth() {
    return useContext(authContext);
}

export { AuthProvider, useAuth };