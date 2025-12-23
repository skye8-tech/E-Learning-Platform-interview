import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
   <>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/courses/:id' element={<CourseDetails />} />
      </Routes>
      </>
  )
}

export default App