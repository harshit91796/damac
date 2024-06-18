import { Button } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <div className='absolute z-20 top-0 w-screen flex justify-between p-10'>
      <h1 className='text-4xl  text-white font-bold ml-[10%]'>DAMAC</h1>
      <Button  className='mr-[10%]  '>
        <h1 className='text-white border-2 border-blue-200 p-2 rounded-lg w-[150px]  hover:bg-blue-500 hover:text-white hover:duration-700 text-bold'>Enquires</h1>
      </Button>
    </div>
  )
}

export default Navbar
