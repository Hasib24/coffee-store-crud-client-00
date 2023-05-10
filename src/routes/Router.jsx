import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home';
import AddCoffee from "../components/AddCoffee";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: ()=>fetch('http://localhost:5000/addcoffee')
    },
    {
      path: "/addcoffee",
      element: <AddCoffee></AddCoffee>
    }
  ]);

export default router;