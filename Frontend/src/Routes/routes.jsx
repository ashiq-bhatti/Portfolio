import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/home";
// import Contact from "../Pages/Contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    
      // if you make separate contact page and  you want to navigate to contact page then you will need to write the path  path:'contact'
      // { element: <Contact /> },
   
    ],
  },
]);
