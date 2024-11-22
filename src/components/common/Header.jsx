import React, { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import { FaUser } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Fa icons import
import { FaRegUserCircle } from 'react-icons/fa'; // Correct icon name
import SummaryApi from '../../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../../redux/authSlice';
import ROLE from "../../common/role";


const Header = () => {

  const [menuDisplay, setMenuDisplay] = useState(false)
  const dispatch = useDispatch();

  // const { user, token } = useSelector((state) => state.user); 

  const user = useSelector(state => state?.user?.user)
  console.log("user header", user)

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    })


    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))

    }

    if (data.error) {
      toast.error(data.message)
    }

  }
  return (
    <header>
      <div className='h-16 shadow-md w-full flex items-center px-4 relative bg-white'>

        {/* Center Search Bar */}
        <div className='flex-1 flex justify-center'>
          <div className='flex items-center w-full max-w-md border rounded-full focus-within:shadow pl-2'>
            <input
              type='text'
              placeholder='Search product here.. '
              className='w-full outline-none px-2'
            />
            <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full'>
              <GrSearch />
            </div>
          </div>
        </div>


        {/* User and Cart Icons */}
        <div className='flex items-center gap-7'>

          <div className=' relative  flex justify-center'>


            {
              user?._id && (


                <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(prev => !prev)}>
                {
                  user?.profilePic ? (
                    <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                  ) : (
                    <FaRegUserCircle />
                  )
                }
              </div>
              )

              
            }
           


            {
              menuDisplay && (
                <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
                  
                  <nav>
                          
                              <Link to={"/admin-panel"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                            
                        </nav>
                </div>
              )
            }


          </div>



          {/* Cart Icon */}
          <div className='text-2xl cursor-pointer relative'>
            <IoCart />
            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2'>
              <p className='text-xs'>0</p>
            </div>
          </div>





          <div>
            {
              user?._id ? (
                <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
              )

                : (
                  <Link
                    to={"/login-form"}
                    className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>
                    Login
                  </Link>
                )
            }



          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;
