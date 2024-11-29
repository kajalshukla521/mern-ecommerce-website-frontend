import { createBrowserRouter } from "react-router-dom"
import App from "../App"

import LoginForm from "../auth/LoginForm";  // Check if the path is correct
import SignupForm from "../auth/SignUpForm"; 
import AdminPanel from "../admin/AdminPanel";

import AllProducts from "../products/AllProducts";
import AllUsers from "../users/AllUsers";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import CategoryList from "../allcategory/AllCategoryList";
import CategoryProduct from "../allcategory/CategoryProduct";
import Cart from "../addToCard/Cart";
import SearchProduct from "../pages/SearchProduct";





const router = createBrowserRouter([
   {
    path :"/",
    element : <App />,
    children : [
        {
            path : "/",
            element : <Home/>
        },


        {
            path : "login-form",
            element : <LoginForm />
        },

        
        {
            path : "signupForm",
            element : <SignupForm/>
        },

        {
            path : "product-category/:categoryName",
            element : <CategoryProduct/>
        },


        {
            path : "product/:id",
            element : <ProductDetails/>
        },



        { path : "cart",
            element : <Cart />

        },

        {
            path : "search",
            element : <SearchProduct/>

        },


        
        {
            path : "admin-panel",
            element : <AdminPanel/>
        },


        {
            path: "all-users",
            element: <AllUsers />
         },
         {
            path: "all-products",
            element: <AllProducts />
         }



    ]
   }
    
]);

export default router