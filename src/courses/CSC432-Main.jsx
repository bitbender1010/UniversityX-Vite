import '../css/Dashboard.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import CourseContent from '../courses-components/CourseContent'

// CSC Imports
import CSC432Sub from '../courses-components/CSC432-Sub'


function CSC432Main() {
    return(
        <>
            <Navigation />

            {/* Left and Right */}
            <div className='custom-grid'>
                <Sidebar />
                <CSC432Sub />
            </div>
        </>
    )
}

export default CSC432Main