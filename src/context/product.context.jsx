import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { doc, setDoc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.init";

const productContext = createContext();

const useProductContextHook = () => {
    const value = useContext(productContext);
    return value;
}

const ProductContext = ({children}) => {
    // const [productData, setProductData] = useState({});
    // useEffect(() => {console.log(productData, "load default...")});

    // const addCart = async (data, uid) => {
    //     console.log(uid, "iddd....");
    //     try {
    //         // Fetch the document data.
    //         let userData = {};
    //         let cartItems = [];
    //         let orderedItems = [];

    //         const docRef = doc(db, "BusyBuy", uid);
    //         const docSnap = await getDoc(docRef);

    //         if (docSnap.exists()) {
    //             setProductData(docSnap.data());
    //             let productDBData = docSnap.data();
    //             console.log(productDBData, "productDBDataaaaa...");
    //             userData = productDBData.userData;
    //             cartItems = productDBData.cartItems;
    //             orderedItems = productDBData.orderedItems;
    //         } else {
    //             console.log("No such document!");
    //             return;
    //         }

    //         console.log(userData, "userDatauserData");

    //         console.log(productData, "productDataproductData");

    //         let updatedCartItems = [];

    //         if (cartItems) {
    //             updatedCartItems = [...cartItems];
    //         }

    //         let productIndex = updatedCartItems.findIndex(item => item?.id === data.id);
    //         console.log(productIndex, "indexx...");

    //         // If product exists, update the count, else add it to the cart
    //         if (productIndex && productIndex !== -1) {
    //             updatedCartItems[productIndex].count += 1;
    //         } else {
    //             data.count = 1;
    //             updatedCartItems.push(data);
    //         }

    //         console.log(updatedCartItems, "item...");
    //         console.log(productData, "productDataproductData");


    //         // Update the data.
    //         await setDoc(doc(db, "BusyBuy", uid), {
    //             userData: userData || [],
    //             cartItem: updatedCartItems,
    //             orderedItem: orderedItems || []
    //         });

    //         toast.success("Cart Item Added.");
    //     } catch (error) {
    //         console.log(error, "error");
    //         toast.error("Cart Item Failed to add.");
    //     }
    // }

    const [productData, setProductData] = useState({});

    const addCart = async (data, uid) => {
        console.log(data, "dataaa");
        try {
            const unsub = onSnapshot(doc(db, "BusyBuy", uid), async (doc) => {
                let actualData = doc.data();
                console.log(actualData, "actual dataa....");
    
                let updatedCartItems = [];
    
                if (actualData?.cartItem) {
                    updatedCartItems = [...actualData.cartItem];
                }
    
                let productIndex = updatedCartItems.findIndex(item => item?.id === data.id);
    
                // If product exists, update the count, else add it to the cart
                if (productIndex !== -1) {
                    updatedCartItems[productIndex].count += 1;
                } else {
                    data.count = 1;
                    updatedCartItems.push(data);
                }
    
                // Define an async function to handle the Firestore update
                const updateCartInFirestore = async () => {
                    await setDoc(doc(db, "BusyBuy", uid), {
                        userData: actualData.userData,
                        cartItem: updatedCartItems,
                        orderedItem: actualData.orderedItem || []
                    });
    
                    toast.success("Cart Item Added.");
                };
    
                // Call the async function and catch any errors
                try {
                    await updateCartInFirestore();
                } catch (error) {
                    console.error("Error updating cart in Firestore:", error);
                    toast.error("Cart Item Failed to add.");
                }
            });
    
        } catch (error) {
            console.log(error, 'error');
        }
    }
    
    

    return (
        <productContext.Provider value={{addCart}}>
            {children}
        </productContext.Provider>
    )
}

export {productContext, useProductContextHook};
export default ProductContext;