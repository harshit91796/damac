import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { grid, grid1, grid2, grid3, grid4 } from '../../../public/images'

function GridPage() {
  return (
    <div  className='h-screen w-screen absolute top-[230%]'>
      <div className='flex justify-end m-5 items-center'>
         <Button variant="contained" className='mr-[10px] h-11 hover:bg-white hover:text-blue-900 bg-blue-900'>EXTERIORS</Button>
         <Button >
         
           <h1 className='border-2 border-blue-900 p-2 rounded-lg hover:bg-blue-900 hover:text-white hover:duration-400'>INTERIORS</h1>
           
         </Button>
      </div>

    <div className='w-[80%] h-[80%] m-auto mt-[5%]'>
    <div className="grid grid-cols-4 gap-4 ">
    <Image src={grid} alt="Home Image" className="w-full h-[400px] object-cover col-span-4 rounded-lg" />
    <Image src={grid1} alt="Home Image" className="w-full  object-cover rounded-lg" />
    <Image src={grid2} alt="Home Image" className="w-full  object-cover rounded-lg" />
    <Image src={grid3} alt="Home Image" className="w-full  object-cover rounded-lg" />
    <Image src={grid4} alt="Home Image" className="w-full  object-cover rounded-lg" />
</div>
    </div>
    </div>
  )
}

export default GridPage
