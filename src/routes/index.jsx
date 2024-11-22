import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home";  // Ensure this path is correct
import LoginForm from "../auth/LoginForm";  // Check if the path is correct
import ForgotPassword from "../auth/ForgotPassword";  // Check if the path is correct
import SignupForm from "../auth/SignUpForm"; 
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";





const router = createBrowserRouter([
   {
    path :"/",
    element : <App />,
    children : [
        {
            path : "home",
            element : < Home/>
        },


        {
            path : "login-form",
            element : <LoginForm />
        },

        {
            path : "forgot-password",
            element : <ForgotPassword />

        },

        {
            path : "signupForm",
            element : <SignupForm/>
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