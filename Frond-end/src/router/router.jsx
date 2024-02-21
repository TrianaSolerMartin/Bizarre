import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../components/layout";
import Home from "../components/pages/Home";
import Footer from "../components/footer";
import Card from "../components/card/Card";


export const router = createBrowserRouter([
  {npm 
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
      path: "/NewItem",
      element: <NewItem/>,
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