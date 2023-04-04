import React from 'react'
import { Drawer } from '@mui/material'


function SideNav() {
  const [isDrawOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
      <div className=' p-5 bg-slate-800 text-slate-300 w-[17%] min-h-full'>
        <Drawer anchor='left' open={isDrawOpen} onClose={() => setIsDrawerOpen(false)} className='text-center m-12 w-[200px]'>
          <ul>
            <li>TABBBB</li>
            <li>TAB1</li>
            <li>TAB2</li>
            <li>TAB3</li>
            <li>TAB4</li>
            <li>TAB5</li>
          </ul>
        </Drawer>
      </div>
    </>
  )
}

export default SideNav

