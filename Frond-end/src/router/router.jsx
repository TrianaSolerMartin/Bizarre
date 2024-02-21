import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import SellProduct from "../components/SellForm";
import EditProduct from "../components/EditProduct";
import Card from "../components/Cards";


export const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "/SellProduct",
      element: <SellProduct/>,
    },
    {
      path: "/Edit/:id",
      element: <EditProduct/>
    },
    {
      path: "/card/:id",
      element: <Card/>
    }
  ],
  }
  ]);

export default router;