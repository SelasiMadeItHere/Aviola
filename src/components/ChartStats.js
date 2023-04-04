import React from 'react'
import { Card, CardHeader } from '@mui/material'
import { SlOptionsVertical } from 'react-icons/sl'

const ChartStats = ({ name, value, color }) => {
    return (
        <>
            <Card className='rounded-md w-1/5 '>
                <p className=' text-right p-2'>USERS</p>
            </Card>
        </>
    )
}


export default ChartStats