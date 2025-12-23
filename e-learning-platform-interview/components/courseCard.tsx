import Link from "next/link";
import { Course } from "@/types/course";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="rounded-lg border p-4 hover:shadow transition">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="mt-2 text-sm text-gray-600">
          {course.shortDescription}
        </p>
        <p className="mt-3 text-sm font-medium text-gray-800">
          Instructor: {course.instructor}
        </p>
      </div>
    </Link>
  );
}
