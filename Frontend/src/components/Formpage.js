import React, { useState } from 'react'
import { FormGroup, Input } from '@mui/material'
import axios from 'axios'


function Formpage() {
  const [fname, setFname] = useState('');
  const [sname, setSname] = useState('');
  const [age, setAge] = useState('');
  const [locations, setLocations] = useState('');
  const [gender, setGender] = useState('');
  const [telephone, setTelephone] = useState('');


  const handlesubmit = () => {
    e.preventDefault();
    axios.post('/api/user', {
      fname,
      sname,
      age,
      locations,
      gender,
      telephone,
    })
      .then(function (response) {
        console.log(response);
        window.alert('collected')
      })
      .catch(function (error) {
        console.log(error);
        // handle error
      });
  }

  return (

<>    
    <div className=' text-center'>
      <FormGroup className='rounded bg-white p-6 w-1/2 text-left mx-[25%] gap-5'>

        <Input name='fname'
          className=' border-1 w-[50%] self-center '
          placeholder='Enter your first name'
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required />

        <Input name='sname'
          className=' border-x-1 border-y-1 w-[50%] self-center'
          placeholder='enter your last name'
          value={sname}
          onChange={(e) => setSname(e.target.value)}
          required />

        <Input name='age'
          className=' border-solid border-1 w-[50%] self-center'
          placeholder='enter your age'
          type='number'
          onChange={(e) => setAge(e.target.value)}
          value={age} required />

        <Input name='locations'
          className=' border-solid border-1 w-[50%] self-center'
          placeholder='Enter your address'
          value={locations}
          onChange={(e) => setLocations(e.target.value)}
          required />

        <select name='gender' className=' border-solid border-1 w-[50%] self-center p-2' value={gender}
          onChange={(e) => setGender(e.target.value)} >
          <option>MALE</option>
          <option>FEMALE</option>
          <option>BISEXUAL</option>
          <option>OTHERS</option>
        </select>

        <input name='telephone'
          className=' border-solid border-1 w-[50%] self-center'
          type='telephone'
          value={telephone}
          placeholder='Phone Number'
          onChange={(e) => setTelephone(e.target.value)}
          required />
       
          <button type='submit' onClick={handlesubmit}> SUBMIT FORM </button>
      </FormGroup>
    </div>
    </>
  )
}

export default Formpage