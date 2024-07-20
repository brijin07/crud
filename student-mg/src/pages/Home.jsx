import React from 'react'
import AddModal from '../components/AddModal';
import Studentdata from './Studentdata';
import Search from '../components/Search';
import { colors } from '@mui/material';


function Home() {

  return (
    <div>
      <div  className='w-full bg-slate-500 h-[80px] flex items-center '>
        <h1 className='text-4xl font-bold ms-5 font-medium text-slate-300'>STUDENT LIST</h1>
        <div className='ms-5 pt-1'>
          <Search/>
        </div>
      <div className='pt-1 ps-5'>
          <AddModal/>
      </div>
      </div>
       <div className='mt-5'>
       <Studentdata/>
       </div>
    </div>
  )
}

export default Home
