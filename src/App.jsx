import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import CourseDashboard from './courses/CourseDashboard'
import CourseDetailsDashboard from './courses/CourseDetailsDashboard'

// CSC Imports
import CSC432Main from './courses/CSC432-Main'
import CSC432_PDF_Main from './courses/CSC432-Pdf-M'
import Lecture_1_Main from './resources/Lecture-1-Main'
import Lecture_2_Main from './resources/Lecture-2-Main'
import Lecture_3x2_Main from './resources/Lecture-3x2-Main'
import Lecture_3x3_Main from './resources/Lecture-3x3-Main'
import SOPL from './resources/SOPL'

import Lecture_3x4 from './resources/Lecture-3x4'
import Lecture_3x5 from './resources/Lecture-3x5'
import Lecture_3x6 from './resources/Lecture-3x6'

import Lecture_4 from './resources/Lecture-4'
import Lecture_5 from './resources/Lecture-5'
import Lecture_6 from './resources/Lecture-6'

//CSC Video Imports
import CSC432_Video_Main from './courses/CSC432-Video-M'
import Online_Class_2 from './videos/Online-Class-2'
import Revision_Video from './resources/Revision-Video'

//CSC438
import CSC438 from './courses/CSC438'
import CSC438_Pdf from './csc438/CSC438-Pdf'
import ITDC from './csc438/ITDC'
import CSC438_Video from './csc438/CSC438-Video'
import CSC438_Online_Class_1 from './csc438/Online-Class-1'


import { Routes, Route, Navigate } from 'react-router-dom'


function App() {

  const user = netlifyIdentity.currentUser();
  const isLoggedIn = user && user.id;

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
      />
      <Route
        path="/dashboard/course-dashboard"
        element={isLoggedIn ? <CourseDashboard /> : <Navigate to="/" />}
      />
      <Route
        path="/dashboard/course-details-dashboard"
        element={isLoggedIn ? <CourseDetailsDashboard /> : <Navigate to="/" />}
      />

      {/* CSC Routes */}
      <Route
        path="/dashboard/csc432"
        element={isLoggedIn ? <CSC432Main /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc432/pdfs"
        element={isLoggedIn ? <CSC432_PDF_Main /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc432/pdfs/lecture-1"
        element={isLoggedIn ? <Lecture_1_Main /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc432/pdfs/lecture-2"
        element={isLoggedIn ? <Lecture_2_Main /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc432/pdfs/lecture-3x2"
        element={isLoggedIn ? <Lecture_3x2_Main /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc432/pdfs/lecture-3x3"
        element={isLoggedIn ? <Lecture_3x3_Main /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc432/pdfs/lecture-3x4"
        element={isLoggedIn ? <Lecture_3x4 /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc432/pdfs/lecture-3x5"
        element={isLoggedIn ? <Lecture_3x5 /> : <Navigate to="/" />}
      />
      
      <Route
        path="/dashboard/csc432/pdfs/lecture-3x6"
        element={isLoggedIn ? <Lecture_3x6 /> : <Navigate to="/" />}
      />
      
      <Route
        path="/dashboard/csc432/pdfs/lecture-4"
        element={isLoggedIn ? <Lecture_4 /> : <Navigate to="/" />}
      />
            
      <Route
        path="/dashboard/csc432/pdfs/lecture-5"
        element={isLoggedIn ? <Lecture_5 /> : <Navigate to="/" />}
      />
                  
      <Route
        path="/dashboard/csc432/pdfs/lecture-6"
        element={isLoggedIn ? <Lecture_6 /> : <Navigate to="/" />}
      />
      
      <Route
        path="/dashboard/csc432/pdfs/survey-of-pro-lang"
        element={isLoggedIn ? <SOPL /> : <Navigate to="/" />}
      />

      {/* CSC432 Video Routes */}
            
      <Route
        path="/dashboard/csc432/videos"
        element={isLoggedIn ? <CSC432_Video_Main /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc432/videos/online-class-2"
        element={isLoggedIn ? <Online_Class_2 /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc432/videos/revision-online"
        element={isLoggedIn ? <Revision_Video /> : <Navigate to="/" />}
      />

      {/* CSC438 Routes */}
      <Route
        path="/dashboard/csc438"
        element={isLoggedIn ? <CSC438 /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc438/pdfs"
        element={isLoggedIn ? <CSC438_Pdf /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc438/pdfs/intro-data-comm"
        element={isLoggedIn ? <ITDC /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc438/videos"
        element={isLoggedIn ? <CSC438_Video /> : <Navigate to="/" />}
      />

      <Route
        path="/dashboard/csc438/videos/online-class-1"
        element={isLoggedIn ? <CSC438_Online_Class_1 /> : <Navigate to="/" />}
      />



    </Routes>
    </>
  )
}

export default App
