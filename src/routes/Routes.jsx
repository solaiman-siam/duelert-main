import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout'
import Error from "../pages/error/Error";
import Home from "../pages/public/Home";
import Blog from "../pages/public/Blog";
import BlogDetails from "../pages/public/BlogDetails";
import Contact from "../pages/public/Contact";
import AboutUs from "../pages/public/AboutUs";
import PricingPage from "../pages/public/PricingPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/blog-details",
                element: <BlogDetails/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/about-us",
                element: <AboutUs/>
            },
            {
                path: "/pricing",
                element: <PricingPage/>
            },
        ]
        
    }
])