// import React from 'react'
// import { BsSpeedometer2 } from 'react-icons/bs'

// const SideNav = () => {
//     return (
//         <div classname=' fixed w-400'>

//             <div className=' bg-gray-800 text-white left-0 p-3 w-64'>
//                 <nav> SelasiMAdeItHere


//                     <ul className='p-3 '>
//                         <li className='gap-2 inline-flex'><BsSpeedometer2 className=' text-2xl' />Dashboard</li>
//                         <li className='gap-2 inline-flex'><BsSpeedometer2 className=' text-2xl' />Dashboard</li>
//                         <li className='gap-2 inline-flex'><BsSpeedometer2 className=' text-2xl' />Dashboard</li>
//                         <li className='gap-2 inline-flex'><BsSpeedometer2 className=' text-2xl' />Dashboard</li>
//                         <li className='gap-2 inline-flex'><BsSpeedometer2 className=' text-2xl' />Dashboard</li>
//                         <li className='gap-2 inline-flex'><BsSpeedometer2 className=' text-2xl' />Dashboard</li>
//                     </ul>
//                 </nav>
//             </div>
//         </div>
//     )
// }

// export default SideNav


import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`h-screen w-64 fixed top-0 left-0 z-50 bg-white shadow-lg ${isSidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
      <div className="p-4">
        <h1 className="text-lg font-bold">Sidebar</h1>
      </div>
      <nav className="mt-6">
        <NavLink to="/" exact activeClassName="text-indigo-500">
          <span className="flex items-center">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <span className="mx-3">Home</span>
          </span>
        </NavLink>
        <NavLink to="/about" activeClassName="text-indigo-500">
          <span className="flex items-center">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <span className="mx-3">About</span>
          </span>
        </NavLink>
        <NavLink to="/contact" activeClassName="text-indigo-500">
          <span className="flex items-center">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <span className="mx-3">Contact</span>
          </span>
        </NavLink>
      </nav>
      <button className="absolute bottom-0 w-full py-2 bg-indigo-500 text-white font-bold" onClick={toggleSidebar}>Toggle Sidebar</button>
    </div>
  );
};

export default Sidebar;
