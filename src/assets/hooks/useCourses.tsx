import { useContext, createContext type ReactNode } from "react"
import { useState, useEffect } from "react"
import axios from "axios"

interface courseContextType {
    courses: courseType[];
    loading: boolean;
    error: string | null;
    getCourses: () => void
    getCourseDetails: (courseId: string) => Promise<any>

}

export interface courseType{
    id: string;
    title: string;
    shortDescription: string;
    instructor: string;
}

interface courseContextProviderProps {
  children: ReactNode
}

const courseContext = createContext<courseContextType | undefined>(undefined)



export const courseContextProvider = ({ children }: courseContextProviderProps) => {

    const [courses, setCourses] = useState<courseType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // Fetch courses here
        getCourses()
    }, [])


    const getCourses = async () => {
        try {
             const response = await axios.get(`https://elearning.skye8.tech/api/courses/`)
             setCourses(response.data)
             console.log(response.data)
        } catch (error) {
            setError("Failed to fetch courses")
        }
       
    }

    const getCourseDetails = async (courseId: string) => {
        try {
            const response = await axios.get(`https://elearning.skye8.tech/api/courses/${courseId}/`)
            return response.data
        } catch (error) {
            setError("Failed to fetch course details")
            return null
        }
    }

    return (
        <courseContext.Provider value={{ courses, loading, error, getCourses, getCourseDetails   }}>
            {children}
        </courseContext.Provider>
    )
}



export const useCourses = () => {
    const context = useContext(courseContext);
    if (!context) {
        throw new Error("useCourses must be used within a courseContextProvider");
    }
    return context;
}