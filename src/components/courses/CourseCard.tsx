import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";
import { Users } from "lucide-react";
import { Clock } from "lucide-react";

const CourseCard = ({ course, index }: { course: any; index: number }) => {
   return (
    <Link 
      to={`/courses/${course.id}`}
      className="group block overflow-hidden rounded-xl border border-border bg-card card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Badge 
          variant="outline" 
          className={`absolute right-3 top-3 ${levelColors[course.level]} backdrop-blur-sm`}
        >
          {course.level}
        </Badge>
      </div>
      
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {course.shortDescription}
        </p>
        
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
            <span className="text-xs font-medium text-primary">
              {course.instructor.charAt(0)}
            </span>
          </div>
          <span className="font-medium text-foreground">{course.instructor}</span>
        </div>
        
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{course.enrolledCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{course.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard