import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const productContext = createContext();

const useProductContextHook = () => {
    const value = useContext(productContext);
    return value;
}

const ProductContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [itemAdded, setItemAdded] = useState(false);

    console.log(cart, "cartt....");

    const addCart = (data) => {
        const itemFound = cart.find(item => item.id === data.id);

        if(itemFound) {
            data.count++;
            toast("Cart count has increased!");
        } else {
            data.count = 1;
            toast("Item added to cart!");
        }
        // setCart(cart.push(data));
    }

    return (
        <productContext.Provider value={{addCart}}>
            {children}
        </productContext.Provider>
    )
}

export {productContext, useProductContextHook};
export default ProductContext;