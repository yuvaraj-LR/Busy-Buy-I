import Cookies from 'js-cookie';

export const setCookie = (cookieName, value, expiryDate) => {
    // Set a cookie named 'user' with a value of 'JohnDoe' that expires in 7 days
    Cookies.set(cookieName, value, { expires: expiryDate });
    console.log("Cookiee Seted.");
    return true;
};

export const getCookie = (cookieName) => {
    const  cookie = Cookies.get(cookieName);
    return cookie;
};

export const removeCookie = (cookieName) => {
    Cookies.remove(cookieName);
    console.log("Cookiee Removed.");
};
