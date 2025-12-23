import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Clock, Users, Award, ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Skeleton } from "../components/ui/skeleton";
import EnrollButton from "../components/EnrollButton";
import { type courseType } from "../assets/hooks/useCourses";
import { Input } from "../components/ui/input";



const levelColors: Record<string, string> = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-blue-100 text-blue-800",
  advanced: "bg-purple-100 text-purple-800",
};

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [error, setError] = useState<string | null>(null);

  

  const handleEnrollSuccess = () => {
    setIsEnrolled(true);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-8">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="aspect-video w-full rounded-xl" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-24 w-full" />
            </div>
            <div>
              <Skeleton className="h-64 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !course) {
    return (
      <Layout>
        <div className="container flex flex-col items-center justify-center py-20 text-center">
          <BookOpen className="h-16 w-16 text-muted-foreground" />
          <h1 className="mt-4 font-heading text-2xl font-bold text-foreground">
            {error || 'Course not found'}
          </h1>
          <p className="mt-2 text-muted-foreground">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild className="mt-6">
            <Link to="/courses">Browse All Courses</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container py-4">
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Course Header */}
      <section className="gradient-hero border-b border-border">
        <div className="container py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Course Info */}
            <div className="lg:col-span-2 animate-fade-in">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className={levelColors[course.level]}>
                  {course.level}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-medium text-foreground">{course.rating}</span>
                  <span>({course.enrolledCount.toLocaleString()} students)</span>
                </div>
              </div>
              
              <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {course.title}
              </h1>
              
              <p className="mt-4 text-lg text-muted-foreground">
                {course.shortDescription}
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">
                    {course.instructor.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instructor</p>
                  <p className="font-medium text-foreground">{course.instructor}</p>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="overflow-hidden rounded-xl border border-border bg-card p-6 card-shadow">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="mt-6 space-y-4">
                  <EnrollButton 
                    courseId={course.id} 
                    isEnrolled={isEnrolled}
                    onEnrollSuccess={handleEnrollSuccess}
                  />
                  
                  <div className="space-y-3 border-t border-border pt-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="ml-auto font-medium text-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Enrolled:</span>
                      <span className="ml-auto font-medium text-foreground">
                        {course.enrolledCount.toLocaleString()} students
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Level:</span>
                      <span className="ml-auto font-medium text-foreground">{course.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            {/* Description */}
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                About This Course
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {course.fullDescription}
              </p>
            </div>

            {/* What You'll Learn */}
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                What You'll Learn
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  'Core concepts and fundamentals',
                  'Hands-on practical exercises',
                  'Real-world project experience',
                  'Industry best practices',
                  'Problem-solving techniques',
                  'Career-ready skills',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  
  )
}

export default CourseDetails