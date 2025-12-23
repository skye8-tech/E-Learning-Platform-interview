import { Button } from "../components/ui/button"
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Sparkles } from 'lucide-react';
import { Layout } from "../components/layout/Layout";

const Home = () => {
  return (
    <div>
          <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="container py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Start learning today — 100% free</span>
            </div>
            
            <h1 className="mt-8 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-fade-in-up">
              Learn Skills That
              <span className="block text-primary">Shape Your Future</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Access world-class courses from industry experts. Master new skills, advance your career, and achieve your goals with our comprehensive learning platform.
            </p>
            
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/courses">
                  View All Topics
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card">
        <div className="container py-12 md:py-16">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: BookOpen, value: '200+', label: 'Expert-led courses' },
              { icon: Users, value: '50,000+', label: 'Active learners' },
              { icon: Award, value: '95%', label: 'Completion rate' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-4 font-heading text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-center md:p-14">
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/10 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary-foreground/10 blur-2xl" />
          </div>
          
          <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to Start Learning?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Join thousands of learners who are already transforming their careers. Browse our course catalog and find your perfect learning path.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link to="/courses">
              Browse All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
    </div>
  )
}

export default Home