import '../css/Dashboard.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import CourseDetails from '../courses-components/CourseDetails'


function CourseDetailsDashboard() {
    return(
        <>
            <Navigation />

            {/* Left and Right */}
            <div className='custom-grid'>
                <Sidebar />
                <CourseDetails />
            </div>
        </>
    )
}

export default CourseDetailsDashboard