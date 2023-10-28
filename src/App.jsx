import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import CourseDashboard from './courses/CourseDashboard'
import CourseDetailsDashboard from './courses/CourseDetailsDashboard'


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
    </Routes>
    </>
  )
}

export default App
