import CarouselSection from "@/components/main/carousel";
import { firaMono } from "@/utils/fonts";
import Link from "next/link";


export default function Home() {
  
  return (
  <>
     <div className="home-container">
        <h1 className={`text-4xl font-bold mb-4 ${firaMono.className}`}>Welcome to Skye8 eLearn!</h1>
        <p>Your learning journey starts here.</p>
        <Link href="/courses" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Explore Courses
        </Link>
    </div>
   <CarouselSection/>
  </>
  );
}
