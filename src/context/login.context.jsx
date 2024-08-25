import { createContext, useContext, useState } from "react";

const loginContext = createContext();

const useLoginContextHook = () => {
    const value = useContext(loginContext);
    return value;
}

const LoginContext = ({children}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <loginContext.Provider value={{name, setName, email, setEmail, password, setPassword}}>
            {children}
        </loginContext.Provider>
    )
}

export {loginContext, useLoginContextHook};
export default LoginContext;