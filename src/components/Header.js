import React from 'react'
import { BiChat, BiMenu, BiBell, BiNotification } from 'react-icons/bi'
import { MdOutlineNightlightRound, MdOutlineWbSunny } from 'react-icons/md'
// import { SlEnvolope } from 'react-icons/sl'
import { CiCircleList, CiMail, CiBellOn, CiCalendar } from 'react-icons/ci'
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';


function Header() {
    return (
        <div className=' bg-blue-900 w-[100%] p-4 top-0 absolute'>
            <div className=' grid grid-col-4'>
                <div className=' col-start-1'>
                    <ul typeof='none' className=' inline-flex text-md'>
                        <li className='text-3xl px-3'><BiMenu /></li>
                        <li className='px-2 hover:text-blue-600'>Dashboard</li>
                        <li className='px-2 hover:text-blue-600'>Users</li>
                        <li className='px-2 hover:text-blue-600'>Settings</li>
                    </ul>
                </div>

                <div className='col-span-2'></div>

                <div className='col-start-5 right-0'>
                    <Stack direction='row' spacing={2} className=' text-2xl'>
                        <MdOutlineWbSunny/>
                        <MdOutlineNightlightRound/>
                    </Stack>
                </div>

                <div className='col-start-9 text-3xl'>
                    <ul direction='row' className=' right-0 inline-flex gap-3'>
                        <CiBellOn/>
                        <CiCircleList/>
                        <CiMail/>
                        <Avatar src='../data/avatar3.png' alt='Pfp'/>
                        <CiCalendar/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header