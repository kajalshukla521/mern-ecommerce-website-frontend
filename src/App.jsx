import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './redux/authSlice';


function App() {
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDatails = async() =>{
    const dataResponse = await fetch(SummaryApi.Current_user.url,{
      method : SummaryApi.Current_user.method,
      credentials : "include"
    })
    const dataApi = await dataResponse.json()
    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))

    }

    // console.log("data-user", dataResponse)
  }




  const fetchUserAddToCart = async () => { 
    const dataResponse = await fetch(SummaryApi.AddToCartProductCount.url, {
        method: SummaryApi.AddToCartProductCount.method,
        credentials: "include",
    });
    const dataApi = await dataResponse.json();
    if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
       
        setCartProductCount(dataApi?.data?.count)
        console.log("dataApi", dataApi)
    }
};




  useEffect(()=>{
    //userDetails
    fetchUserDatails()
    //userdetails cart product
    fetchUserAddToCart()

  },[])
  return (
    <>
    <Context.Provider value= {{
      fetchUserDatails, //user details fetch
      cartProductCount, //curret user count addtocart product
      fetchUserAddToCart

    }}>
    <ToastContainer />
      <Header />
     

      {/* Footer ke space ko cover karne ke liye padding add ki */}
      <main className='min-h-[calc(100vh-120px)] pt-16'>
        
        <Outlet />
       
       
      </main>
     
      
      <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
