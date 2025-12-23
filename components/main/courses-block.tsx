"use client"
import React, { useEffect, useState } from 'react'
import { CourseCard } from '../cards/CourseCard'
import { getCourses } from '@/lib/useapi';
import { course } from '@/lib/types';
import { Loader2 } from 'lucide-react';

export const CoursesBlock = () => {
    const [courses, setCourses] = useState<course[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        try{
            const fetchCourses = async () => {
                const courses = await getCourses();
                console.log(courses);
                setCourses(courses);
            };
            fetchCourses();
            setIsLoading(false);
        }catch(err){
            console.log(err);
            setIsLoading(false);
        }
    }, []); 
  return (
    <div className='min-h-[400px] w-full gap-4 flex items-center bg-gray-50 justify-center'>
        {/* <CourseCard/> */}
        {
            isLoading ? 
                <div className='w-full col-span-3 h-60 flex items-center justify-center'>
                    <Loader2 size={30} className='animate-spin'/>
                </div> :
            courses.length > 0 ? (
                courses.map((course) => (
                    <CourseCard key={course.id} />
                ))
            ) : (
                <div className='w-full flex flex-col items-center gap-2 justify-center'>
                    <h1 className='text-6xl'>Opps! :(</h1>
                    No course seem to be available right now.
                </div>
            )
        }
        
    </div>
  )
}
