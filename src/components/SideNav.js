import React from 'react'
import { Drawer, ListItem, List, Box, Typography, IconButton } from '@mui/material'
import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import logo from'../Assets/CoreUI logo.png'

function SideNav() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <div>
        <IconButton onClick={()=>setOpenDrawer(true)} arial-label='logo'>
          <BiMenu className=' hover:text-blue-600 text-md'/>
        </IconButton>
        <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)} className=' '>
          <Box className=' w-52'>
            <Typography className=' h-64'>
            <img src={logo} alt='logo'/>
            </Typography>
          </Box>
        </Drawer>
      </div>
    </>
  )
}

export default SideNav