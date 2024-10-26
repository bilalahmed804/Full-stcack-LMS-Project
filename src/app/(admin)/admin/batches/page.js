import { BatchTable } from '@/components/DataTable/BatchTable'
import { BatchDialog } from '@/components/Dialog/BatchModal'
import React from 'react'
export default function Bateches () {
  return (
    <div className='min-h-screen p-10'>
       <div className="flex justify-between my-2">
      <h1 className='text-3xl font-bold text-center'>Courses</h1>
      <BatchDialog/>
      </div>
      <BatchTable/>
    </div>
  )
}
