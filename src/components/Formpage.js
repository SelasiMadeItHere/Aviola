import React from 'react'
import { Button, FormGroup, Input } from '@mui/material'


function Formpage() {

  const [fname, setFname] = useState('')
  const [sname, setSname] = useState('')
  const [age, setAge] = useState('')
  const [locations, setLocations] = useState('')
  const [gender, setGender] = useState('')
  const [telephone, setTelehone] = useState('')

  return (
    <div className=' text-center'>
      <FormGroup className='rounded bg-white p-6 w-1/2 text-left mx-[25%] gap-5'>
        <label>FIRST NAME</label>
        <Input name='fname'
          className=' border-1 w-[50%] self-center '
          placeholder='Enter your first name'
          value={fname} onChange={(e) => setFname(e.target.value)}
          required />
        
        <label>LAST NAME</label>
        <Input name='sname'
          className=' border-x-1 border-y-1 w-[50%] self-center'
          placeholder='enter your last name'
          value={sname} onChange={(e) => setSname(e.target.value)}
          required />
          
        <label>AGE</label>
        <Input name='age' 
        className=' border-solid border-1 w-[50%] self-center' 
        placeholder='enter your age' 
        value={age} onChange={(e) => setAge(e.target.value)}
        type='number' 
        required />

        <label>ADDRESS</label>
        <Input name='location' 
        className=' border-solid border-1 w-[50%] self-center' 
        placeholder='Enter your address' 
        value={locations} onChange={(e) => setLocations(e.target.value)}
        required />

        <label>GENDER</label>
        <select name='gender' className=' border-x-2 p-3 hover:border-blue-700 outline-1 outline-blue-700d'
        value={gender} onChange={(e) => setGender(e.target.value)}
        >
          <option>MALE</option>
          <option>FEMALE</option>
          <option>BISEXUAL</option>
          <option>OTHERS</option>
        </select>
        <label>PHONE NUMBER</label>
        <Input name='telephone' className=' border-solid border-1 w-[50%] self-center' type='telephone' 
        placeholder='Phone Number' 
        value={telephone} onChange={(e) => setTelephone(e.target.value)}
        required />
        <input type='button' name='submit' value='SUBMIT'/>
      </FormGroup>
    </div>
  )
}

export default Formpage