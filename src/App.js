import "./global.css"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import NotFound from "./pages/notFound";
import Navbar from "./components/Navbar"
import Home from "./pages/home";
import Order from "./pages/order";
import Cart from "./pages/cart";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        {
          index: true, element: <Home />
        },
        {
          path: "/order", element: <Order />
        },
        {
          path: "/cart", element: <Cart />
        },
        {
          path: "/signup", element: <SignUp />
        },
        {
          path: "/signin", element: <SignIn />
        }
      ]
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
