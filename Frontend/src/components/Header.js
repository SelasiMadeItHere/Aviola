import React, { useState } from 'react'
import { BiChat, BiMenu } from 'react-icons/bi'
import { MdOutlineNightlightRound, MdOutlineWbSunny } from 'react-icons/md'
import { CiCircleList, CiMail, CiBellOn, CiCalendar } from 'react-icons/ci'
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';
import avatarr1 from '../data/avatar.jpg'
import { Badge } from '@mui/material';
import { GrClose } from 'react-icons/gr'
import BasicBreadcrumb from './BasicBreadcrumb';
import SideNav from './SideNav';



function Header() {

    const [nav, setNav] = useState(false)
    // const handleclick = () => setNav(!nav)
    return (
        <>
            <div className='w-[100%]'>
                <div className=' grid grid-col-10 pt-3 bg-white border-2 border-y-gray-200'>
                    <div className=' col-start-1 col-span-2'>
                        <ul typeof='none' className=' inline-flex text-sm m-2'>
                            <li className=' hover:text-blue-600 text-slate-500'>
                                <SideNav />
                            </li>
                            <li className='px-2 text-slate-500 hover:text-slate-700 cursor-pointer pt-2'>Dashboard</li>
                            <li className='px-2 text-slate-500 hover:text-slate-700 cursor-pointer pt-2'>Users</li>
                            <li className='px-2 text-slate-500 hover:text-slate-700 cursor-pointer pt-2'>Settings</li>
                        </ul>
                    </div>

                    <div className='col-span-2'>
                    </div>

                    <div className='col-start-8 text-right'>
                        <Stack direction='row' spacing={2} className=' text-xl'>
                            <div className=' bg-indigo-700 gap-3 text-white inline-flex p-2 rounded-md'>
                                <MdOutlineWbSunny className='hover:text-blue-600' />
                                <MdOutlineNightlightRound className='hover:text-blue-600' />
                            </div>
                        </Stack>
                    </div>

                    <div className='col-start-9 text-3xl text-right'>
                        <ul direction='row' className='inline-flex gap-7'>
                            <Badge badgeContent={5} color='error'>
                                <CiBellOn />
                            </Badge>

                            <Badge badgeContent={5} color='warning'>
                                <CiCircleList />
                            </Badge>

                            <Badge badgeContent={4} color='success'>
                                <CiMail />
                            </Badge>

                            <Avatar src={avatarr1} sx={{ width: 39, height: 39 }} />

                            <Badge>
                                <CiCalendar />
                            </Badge>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header