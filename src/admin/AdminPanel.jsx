import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';
const AdminPanel = () => {

 const user = useSelector(state => state?.user?.user)
//  const Navigate = useNavigate()

//  useEffect(()=>{
//   if(user.role != ROLE.ADMIN){
//     Navigate("/home")
    
//   }

//  }, [user])




  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden'>
    <aside className='bg-white min-h-full w-full max-w-[240px] customShadow p-4'>
      {/* User Profile Section */}
      <div className='flex flex-col items-center gap-2 mb-4'>
        {/* User Icon or Profile Picture */}
        <div className='text-3xl cursor-pointer relative flex-col justify-center'>
          {
            user?.profilePic ? (
              <img 
                src={user?.profilePic} 
                className='w-20 h-20 rounded-full' 
                alt={user?.name} 
              />
            ) : (
              <FaRegCircleUser className='text-5xl text-gray-600' />
            )
          }
        </div>
  
        {/* User Name */}
        <p className='capitalize text-lg font-semibold mt-2'>
          {user?.name || "Guest User"}
        </p>
  
        {/* User Role */}
        <p className='text-sm text-gray-500'>
          {user?.role}
        </p>
      </div>
  
      <div>
        {/* Navigation Links */}
        <nav className='flex flex-col gap-4 mt-8'>
          <Link 
            to={"/all-users"} 
            className='px-4 py-2 rounded-md hover:bg-slate-100 text-gray-700 font-medium'
          >
            All User
          </Link>
    
          <Link 
            to={"/all-products"} 
            className='px-4 py-2 rounded-md hover:bg-slate-100 text-gray-700 font-medium'
          >
            All Product
          </Link>
        </nav>
      </div>
    </aside>
  
    {/* Main Content Area */}
    <main className='flex-1 p-6'>
      <Outlet/>
    </main>
  </div>
  
  )
}

export default AdminPanel