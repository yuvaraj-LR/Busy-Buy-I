import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { doc, setDoc, onSnapshot, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase.init";

const productContext = createContext();

const useProductContextHook = () => {
    const value = useContext(productContext);
    return value;
}

const ProductContext = ({children}) => {
    const [productData, setProductData] = useState({});

    const fetchUserData = async() => {
        auth.onAuthStateChanged(async(user) => {
            console.log(user, "userDataa...");

            if(user) {
                const docRef = doc(db, "BusyBuy", user?.uid);
                const docSnap = await getDoc(docRef);
    
                if(docSnap.exists()) {
                    setProductData(docSnap.data());
                    console.log(docSnap.data(), "dataa...");
                } else {
                    console.log("User is not logged in.");
                }
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const addCart = async (data) => {
        try {
            const { userdata, cartItem, orderedItem } = productData;
        
            let updatedCartItem = cartItem ? [...cartItem] : [];
        
            let productIndex = updatedCartItem.findIndex(item => item?.id === data.id);
        
            // If product exists, update the count, else add it to the cart
            if (productIndex !== -1) { // Corrected condition
                updatedCartItem[productIndex].count += 1;
            } else {
                data.count = 1;
                updatedCartItem.push(data);
            }
        
            // Update the data.
            await setDoc(doc(db, "BusyBuy", userdata.uid), {
                userdata: userdata,
                cartItem: updatedCartItem,
                orderedItem: orderedItem || []
            });
        
            toast.success("Cart Item Added.");
        } catch (error) {
            console.log(error, "error");
            toast.error("Cart Item Failed to add.");
        }
    };
    
    return (
        <productContext.Provider value={{addCart}}>
            {children}
        </productContext.Provider>
    )
}

export {productContext, useProductContextHook};
export default ProductContext;