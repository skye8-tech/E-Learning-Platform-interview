// app/courses/page.tsx
import { fetchCourses } from "@/services/course";
import CourseCard from "@/components/courseCard";

export default async function CoursesPage() {
  const courses = await fetchCourses();

  if (!courses.length) {
    return (
      <div className="p-6 text-center text-gray-600">
        No courses available at the moment.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Available Courses</h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
