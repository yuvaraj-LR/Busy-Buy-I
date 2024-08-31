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
    const [cartPriceCount, setCartPriceCount] = useState(0);

    const fetchUserData = async() => {
        // Check for user login.
        auth.onAuthStateChanged(async(user) => {
            console.log(user, "userDataa...");

            if (user) {
                const docRef = doc(db, "BusyBuy", user?.uid);
            
                // Set up a real-time listener using onSnapshot
                const unsubscribe = onSnapshot(docRef, (docSnap) => {
                    if (docSnap.exists()) {

                        const data = docSnap.data();

                        setProductData(data);
                        console.log(data, "dataa...");

                        let priceCount = 0;
                        data.cartItem.forEach(item => {
                            priceCount += (item.count * item.price)
                        });
                        setCartPriceCount(priceCount);

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
                toast("Item Count Increased.");
            } else {
                data.count = 1;
                updatedCartItem.push(data);
                toast("Cart Item Added.");
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

    const removeCart = async (data) => {
        const { userdata, cartItem, orderedItem } = productData;
        
        let updatedCartItem = cartItem ? [...cartItem] : [];
    
        let productIndex = updatedCartItem.findIndex(item => item?.id === data.id);

        if(productIndex === -1) {
            toast("No more product.")
        }

        const product = cartItem[productIndex];

        if(product.count <= 1) {
            updatedCartItem.splice(productIndex, 1);
        } else {
            product.count--;
        }

        // Update the data.
        await setDoc(doc(db, "BusyBuy", userdata.uid), {
            userdata: userdata,
            cartItem: updatedCartItem,
            orderedItem: orderedItem || []
        });

        toast("Product removed from cart.")
    }

    const handleClear = async() => {
        const {userdata, orderedItem} = productData;

        await setDoc(doc(db, "BusyBuy", userdata.uid), {
            userdata: userdata,
            cartItem: [],
            orderedItem: orderedItem || []
        });
    }
    
    const handleBuyNow = () => {

    }
    
    return (
        <productContext.Provider value={{ productData, cartPriceCount, addCart, removeCart, handleClear, handleBuyNow}}>
            {children}
        </productContext.Provider>
    )
}

export {productContext, useProductContextHook};
export default ProductContext;