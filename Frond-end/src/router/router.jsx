import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../components/layout";
import Home from "../components/home/Home";
import SellForm from "../components/SellForm";
import Edit from "../components/edit/Edit";
import Footer from "../components/footer/footer";
import Gallery from "../components/gallery/Gallery";
import Card from "../components/card/Card";
import ImageUpload from "../components/ImageUpload/imgupload";


export const router = createBrowserRouter([
  {
      path: "/",
      element: <LayoutPublic />,
      children: [
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "/footer",
      element: <Footer/>
    },
    {
      path: "/sellform",
      element: <SellForm/>,
    },
    {
      path: "/Edit/:id",
      element: <Edit/>
    },
    {
      path: "/Gallery",
      element: <Gallery/>
    },
    {
      path: "/card/:id",
      element: <Card/>
    },
    {
      path: "/imgupload/",
      element: <ImageUpload/>
    }
  ],
  }
  ]);

export default router;