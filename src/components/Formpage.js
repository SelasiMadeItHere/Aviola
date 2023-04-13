import React from 'react'
import { FormGroup, Input } from '@mui/material'


function Formpage() {
  return (
    <div className=' text-center'>
      <FormGroup className='rounded bg-white p-6 w-1/2 text-left mx-[25%] gap-5' action="Login.php">
        <label>FIRST NAME</label>
        <Input name='fname' className=' border-1 w-[50%] self-center ' placeholder='Enter your first name' required />
        <label>LAST NAME</label>
        <Input name='sname' className=' border-x-1 border-y-1 w-[50%] self-center' placeholder='enter your last name' required />
        <label>AGE</label>
        <Input name='age' className=' border-solid border-1 w-[50%] self-center' placeholder='enter your age' type='number' required />
        <label>ADDRESS</label>
        <Input name='location' className=' border-solid border-1 w-[50%] self-center' placeholder='Enter your address' required />
        <label>GENDER</label>
        <select name='gender' className=' border-x-2 p-3 hover:border-blue-700 outline-1 outline-blue-700d'>
          <option>MALE</option>
          <option>FEMALE</option>
          <option>BISEXUAL</option>
          <option>OTHERS</option>
        </select>
        <label>PHONE NUMBER</label>
        <input name='telephone' className=' border-solid border-1 w-[50%] self-center' type='telephone' placeholder='Phone Number' required />
        <input type='button' value='SUBMIT'/>
      </FormGroup>
    </div>
  )
}

export default Formpage