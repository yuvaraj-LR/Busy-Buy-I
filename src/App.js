import "./global.css"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NotFound from "./pages/notFound";
import Home from "./pages/home";
import Order from "./pages/order";
import Cart from "./pages/cart";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Navbar from "./components/Navbar";
import ProductContext from "./context/product.context";
import LoginContext from "./context/login.context";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/order", element: <Order /> },
        { path: "/cart", element: <Cart /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/signin", element: <SignIn /> }
      ]
    }
  ]);

  return (
    <ProductContext>
      <LoginContext>
        <div className="app">
          <RouterProvider router={router} />
          <ToastContainer limit={3} theme="light" />
        </div>
      </LoginContext>
    </ProductContext>
  );
}

export default App;
