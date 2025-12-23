import React, { useState }  from 'react'
import {type  courseType } from '../assets/hooks/useCourses';
import { Layout } from '../components/layout/Layout';

const CourseListing = () => {

 const [courses, setCourses] = useState<courseType[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<courseType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
    


 

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero border-b border-border">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center animate-fade-in">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Explore Our Courses
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover world-class courses taught by industry experts. Start learning today and transform your career.
            </p>
            
            {/* Search Bar */}
            <div className="relative mt-8">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses, topics, or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 w-full rounded-xl border-border bg-card pl-12 pr-4 text-base shadow-sm transition-shadow focus:shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="container py-10 md:py-14">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {isLoading ? (
              'Loading courses...'
            ) : (
              <>
                Showing <span className="font-medium text-foreground">{filteredCourses.length}</span> courses
              </>
            )}
          </p>
        </div>

        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <CourseCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredCourses.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        )}
      </section>
    </Layout>


export default CourseListing