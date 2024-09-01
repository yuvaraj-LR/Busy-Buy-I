


const filterContext = createContext();

// Custom hook.
const useFilterContextHook = () => {
    const value = useContext(filterContext);
    return value;
}

