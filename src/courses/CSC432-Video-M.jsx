import '../css/Dashboard.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import CourseContent from '../courses-components/CourseContent'

// CSC Imports
import CSC432_Video_Sub from '../courses-components/CSC432-Video-S'


function CSC432_Video_Main() {
    return(
        <>
            <Navigation />

            {/* Left and Right */}
            <div className='custom-grid'>
                <Sidebar />
                <CSC432_Video_Sub />
            </div>
        </>
    )
}

export default CSC432_Video_Main