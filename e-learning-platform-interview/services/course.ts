// services/course.service.ts
import { Course } from "@/types/course";
export async function fetchCourses(): Promise<Course[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch courses");
    return res.json();
  }
