
// [
//   {
//     "id": "123e4567-e89b-12d3-a456-426614174000",
//     "title": "Introduction to NestJS",
//     "description": "Learn the fundamentals of NestJS framework",
//     "instructorId": "123e4567-e89b-12d3-a456-426614174000",
//     "instructor": {
//       "id": "123e4567-e89b-12d3-a456-426614174000",
//       "email": "instructor@example.com",
//       "role": "instructor"
//     },
//     "createdAt": "2024-01-01T00:00:00.000Z"
//   }
// ]

export const CourseCard = () => {
    
  return (
    <div className='border border-(--border-col) cursor-pointer rounded-md'>
        <div className='p-4'>
            <h2 className='text-2xl font-semibold'>Introduction to NestJS</h2>
            <p className='mt-1 text-gray-600'>Learn the fundamentals of NestJS framework</p>
            <p className='mt-4 text-sm text-gray-500'>Instructor:
                <span className='font-medium ml-1'>
                    John Doe
                </span>
            </p>
        </div>
    </div>
  )
}
