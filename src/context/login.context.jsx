import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase.init";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { setCookie, getCookie, removeCookie } from "../api/cookies";

const loginContext = createContext();

// Custom hook.
const useLoginContextHook = () => {
    const value = useContext(loginContext);
    return value;
}

const LoginContext = ({children}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    // Check for user Login.
    useEffect(() => {
        const accessToken = getCookie("accessToken");
        
        if (accessToken) {
            setIsUserLoggedIn(true);
        } else {
            setIsUserLoggedIn(false);
        }
    }, [isUserLoggedIn])

    // SignUp new user.
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            // Fire-auth connection.
            await createUserWithEmailAndPassword(auth, email, password);         
            const user = auth.currentUser;
            console.log(user, "userData...");   

            // Fire-store storage.
            if(user) {
                await setDoc(doc(db, "BusyBuy", user.uid), {
                    userdata: {
                        uid: user.uid,
                        name: name,
                        email: email,
                        password: password
                    },
                    cartItems: [],
                    orderedItems: [] 
                });
                console.log(user, "userDataa....");

                // Setting cookie.
                setCookie("accessToken", user.accessToken, 7);
                setIsUserLoggedIn(true);
            }
            toast.success("User Registered Successfully!");

            // Reset the values.
            setName('');
            setEmail('');
            setPassword('');

            // Redirect to Home.
            // window.history.go(-2);
            window.location.href = "/";
        } catch (error) {
            if(error.code === "auth/invalid-email" || error.code === "auth/email-already-in-use") {
                toast.error("This email is already in use by another account.");
            } else if (error.code === "auth/weak-password") {
                toast.error("Weak Password! Password should be more than 6 characters.");
            } else {
                toast.error("An unexpected error occurs.");
            }

            console.log(error.code, "errorrr...");
        }
    };

    // Login old user
    const handleSignIn = async (e)  => {
        e.preventDefault();

        try {
            const user = await signInWithEmailAndPassword(auth, email, password);

            toast.success("User Logged Successfully!");

            // Setting cookie. 
            setCookie("accessToken", user.accessToken, 7);
            setIsUserLoggedIn(true);

            // Redirect to Home.
            window.history.back();
        } catch (error) {
            console.log(error.code, "codeee...");
            if(error.code === "auth/invalid-credential") {
                toast.error("Invalid Email Id and Password");
            } else if (error.code === "auth/weak-password") {
                toast.error("Weak Password! Password should be more than 6 characters.");
            } else {
                toast.error("An unexpected error occurs.");
            }
            console.log(error.code, "errorrr...");
        }
    }

    // Logout user
    const handleLogout = async() => {
        try {
            await auth.signOut();
            toast.warning("User Logged Successfully!");

            // Remove accessToken cookie.
            removeCookie("accessToken");
            setIsUserLoggedIn(false);

            // Redirect to Home.
            window.location.href = "/";
        } catch (error) {
            toast.error("An unexpected error occurs.");
            console.log(error.code, "errorrr...");
        }
    }

    return (
        <loginContext.Provider value={{ name, setName, email, setEmail, password, setPassword, isUserLoggedIn, handleSignUp, handleSignIn, handleLogout }}>
            {children}
        </loginContext.Provider>
    )
}

export {loginContext, useLoginContextHook};
export default LoginContext;