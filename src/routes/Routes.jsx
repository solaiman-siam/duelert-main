import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout'
import Error from "../pages/error/Error";
import Home from "../pages/public/Home";
import Blog from "../pages/public/Blog";
import BlogDetails from "../pages/public/BlogDetails";
import Contact from "../pages/public/Contact";
import AboutUs from "../pages/public/AboutUs";
import PricingPage from "../pages/public/PricingPage";
import Login from "../pages/auth/Register";
import Register from "../pages/auth/Login";
import PageTitle from "../components/shared/PageTitle";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: (
                    <PageTitle name="Home">
                      <Home />
                    </PageTitle>
                  )
            },
            {
                path: "/blog",
                element: (
                    <PageTitle name="Blog">
                      <Blog/>
                    </PageTitle>
                  ) 
            },
            {
                path: "/blog-details",
                element: (
                    <PageTitle name="Blog Details">
                      <BlogDetails/>
                    </PageTitle>
                  ) 
            },
            {
                path: "/contact",
                element: (
                    <PageTitle name="Contact Us">
                      <Contact/>
                    </PageTitle>
                  ) 
            },
            {
                path: "/about-us",
                element: (
                    <PageTitle name="About Us">
                    <AboutUs/>
                    </PageTitle>
                  ) 
            },
            {
                path: "/pricing",
                element: (
                    <PageTitle name="Pricing Plan">
                     <PricingPage/>
                    </PageTitle>
                  ) 
            },
            {
                path: "/login",
                element: (
                    <PageTitle name="Login">
                      <Login/>
                    </PageTitle>
                  ) 
            },
            {
                path: "/register",
                element: (
                    <PageTitle name="Register">
                     <Register/>
                    </PageTitle>
                  ) 
            },
        ]
        
    }
])