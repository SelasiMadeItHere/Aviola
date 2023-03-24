import React from 'react'
import {BiMenu} from 'react-icons/bi'
// import Button from 

function Header() {
    return (
        <div className=' bg-main-bg w-[100%] p-4'>
            <div className=' grid grid-col-6 '>
                <div className=' grid-col-1'>
                    <ul typeof='none' className=' inline-flex'>
                        <li className='text-2xl'><BiMenu/></li>
                        <li className='px-2'>Dashboard</li>
                        <li className='px-2'>Users</li>
                        <li className='px-2'>Settings</li>
                    </ul>
                </div>

                <div className=' col-span-2'></div>

                <div className=' grid-start-3 bg-blue-800'>
                    <button className='px-2'>DAY</button>
                    <button className='px-1'>NIGHT</button>
                </div>
                
                <div className='grid-start-4'>
Settingss
                </div>
            </div>
        </div>
    )
}

export default Header