import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase/firebase.init";

const productContext = createContext();

const useProductContextHook = () => {
    const value = useContext(productContext);
    return value;
}

const ProductContext = ({children}) => {
    const [productData, setProductData] = useState({});

    const fetchUserData = async() => {
        // Check for user login.
        auth.onAuthStateChanged(async(user) => {
            console.log(user, "userDataa...");

            if (user) {
                const docRef = doc(db, "BusyBuy", user?.uid);
            
                // Set up a real-time listener using onSnapshot
                const unsubscribe = onSnapshot(docRef, (docSnap) => {
                    if (docSnap.exists()) {
                        setProductData(docSnap.data());
                        console.log(docSnap.data(), "dataa...");
                    } else {
                        console.log("No such document!");
                    }
                }, (error) => {
                    console.error("Error fetching document: ", error);
                });
            
                // Remember to clean up the listener when no longer needed
                return () => unsubscribe();
            }
        });
    };

    // For all changes need to fetch the lastest data..
    useEffect(() => {
        fetchUserData();
    }, []);

    // Add to cart.
    const addCart = async (data) => {
        try {
            const { userdata, cartItem, orderedItem } = productData;
        
            let updatedCartItem = cartItem ? [...cartItem] : [];
        
            let productIndex = updatedCartItem.findIndex(item => item?.id === data.id);
        
            // If product exists, update the count, else add it to the cart
            if (productIndex !== -1) { // Corrected condition
                updatedCartItem[productIndex].count += 1;
                toast.success("Item Count Increased.", {
                    "theme":"colored",
                });
            } else {
                data.count = 1;
                updatedCartItem.push(data);
                toast.success("Cart Item Added.",{
                    "theme":"colored",
                });
            }
        
            // Update the data.
            await setDoc(doc(db, "BusyBuy", userdata.uid), {
                userdata: userdata,
                cartItem: updatedCartItem,
                orderedItem: orderedItem || []
            });
        } catch (error) {
            console.log(error, "error");
            toast.error("Cart Item Failed to add.");
        }
    };
    
    return (
        <productContext.Provider value={{addCart, productData}}>
            {children}
        </productContext.Provider>
    )
}

export {productContext, useProductContextHook};
export default ProductContext;