import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { Button, TableBody, TableHead } from '@mui/material';
import Stack from '@mui/material/Stack';

function Formpage() {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className=' grid grid-cols-8 mt-6'>
      <ToastContainer className='top-4 text-center' />
      <table className='items-center bg-white col-start-2 col-end-8 rounded-lg drop-shadow-md'>
        <thead className=' bg-green-600'>
          <tr>
            <th className=' p-4 gap-6'>ID</th>
            <th className=' p-4 gap-6'>First Name</th>
            <th className=' p-4 gap-6'>Last Name</th>
            <th className=' p-4 gap-6'>E-mail</th>
            <th className=' p-4 gap-6'>Contact</th>
            <th className=' p-4 gap-6'>Actions</th>
          </tr>
        </thead>
        <tbody className=' p-12'>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">  {index + 1}</th>
                <td className=' text-center p-3'>{item.fname}</td>
                <td className=' text-center p-3'>{item.sname}</td>
                <td className=' text-center p-3'>{item.email}</td>
                <td className=' text-center p-3'>{item.contact}</td>
                <td >
                  <Stack direction='row' spacing={4}>
                    <Link to={`/edit/${item.id}`}>
                      <Button variant='contained' color='primary'>EDIT</Button>
                    </Link>
                    <Button variant='contained' color='error'>DELETE</Button>
                    <Link>
                      <Button variant='outlined'> VIEW</Button>
                    </Link>
                  </Stack>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Formpage