import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './redux/authSlice';

function App() {
  const dispatch = useDispatch()
  const fetchUserDatails = async() =>{
    const dataResponse = await fetch(SummaryApi.Current_user.url,{
      method : SummaryApi.Current_user.method,
      credentials : "include"
    })
    const dataApi = await dataResponse.json()
    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))

    }

    console.log("data-user", dataResponse)
  }

  useEffect(()=>{
    fetchUserDatails()
  
    //user details


  },[])
  return (
    <>
    <Context.Provider value= {{
      fetchUserDatails //user details fetch

    }} />
    <ToastContainer />
      <Header />
      {/* Footer ke space ko cover karne ke liye padding add ki */}
      <main className='min-h-[calc(100vh-120px)] pb-16'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
