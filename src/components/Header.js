import React, { useState } from 'react'
import { BiChat, BiMenu } from 'react-icons/bi'
import { MdOutlineNightlightRound, MdOutlineWbSunny } from 'react-icons/md'
// import { SlEnvolope } from 'react-icons/sl'
import { CiCircleList, CiMail, CiBellOn, CiCalendar } from 'react-icons/ci'
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';
import avatarr1 from '../data/avatar.jpg'
import { Badge } from '@mui/material';
// import SideNav from './SideNav';
import { GrClose } from 'react-icons/gr'
import { Drawer, Box } from '@mui/material'

function Header() {

    const [nav, setNav] = useState(false)
    const handleclick = () => setNav(!nav)
    const [isDrawOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
            <div className='w-[100%] p-3 top-0 border-y-1 fixed'>
                <div className=' grid grid-col-10'>
                    <div className=' col-start-1 col-span-2'>
                        <ul>
                            <li><BiMenu/></li>
                            <li>Dashboard</li>
                        </ul>
                    </div>

                    <div className='col-span-2'></div>

                    <div className='col-start-8 text-right'>
                        <Stack direction='row' spacing={2} className=' text-2xl'>
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

                            <Badge badgeContent={5} color='success'>
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