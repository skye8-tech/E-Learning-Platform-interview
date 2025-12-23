import { CoursesBlock } from '@/components/main/courses-block'
import React from 'react'

const CoursePage = () => {
  return (
    <div className="w-full max-w-200 mx-auto p-2">
       <div className='h-80 w-full flex items-center flex-col justify-center'>
            <h1 className='text-3xl md:text-5xl font-bold'>Courses</h1>
            <p className='mt-2'>Checkout our wide range of courses</p>
       </div>
       <CoursesBlock/>
    </div>
  )
}

export default CoursePage