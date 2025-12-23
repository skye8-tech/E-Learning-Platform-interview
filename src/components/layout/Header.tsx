import { Link } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';
import { Button } from '../ui/button';


const Header = () => {
  return (
    <div>
         <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">LearnHub</span>
        </Link>
        
        <nav className="hidden items-center gap-6 md:flex">
          <Link 
            to="/courses" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Browse Courses
          </Link>
          <Link 
            to="/courses" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            My Learning
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">User menu</span>
          </Button>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header