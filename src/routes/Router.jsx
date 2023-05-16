import { createBrowserRouter } from "react-router-dom";
import HompageLayout from '../components/HompageLayout';
import AddCoffee from "../components/AddCoffee";
import Home from "../components/Home";
import Coffees from "../components/Coffees";
import SignIn from "../components/SignIn";
import Logout from "../components/Logout";
import Register from "../components/Register";
import PrivateRoutes from "../routes/PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HompageLayout></HompageLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>

        },
        {
          path: "/coffees",
          element: <PrivateRoutes><Coffees></Coffees></PrivateRoutes> ,
          loader: ()=>fetch('http://localhost:5000/addcoffee')
        },
        {
          path: "/addcoffee",
          element: <AddCoffee></AddCoffee>
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>
        },
        {
          path: "/logout",
          element: <Logout></Logout>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
  

    }
  ])

export default router;