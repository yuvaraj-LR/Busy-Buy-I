import { createContext, useContext, useState } from "react";

const productContext = createContext();

const useCustomContextHook = () => {
    const value = useContext(productContext);
    return value;
}

const ProductContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [itemAdded, setItemAdded] = useState(false);

    return (
        <productContext.Provider value={{cart, setCart, itemAdded, setItemAdded}}>
            {children}
        </productContext.Provider>
    )
}

export {productContext, useCustomContextHook};
export default ProductContext;