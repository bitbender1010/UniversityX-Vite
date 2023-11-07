import '../css/Dashboard.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import CourseContent from '../courses-components/CourseContent'

// CSC Imports
import Lecture_3x2 from './Lecture-3x2'

function Lecture_3x2_Main() {
    return(
        <>
            <Navigation />

            {/* Left and Right */}
            <div className='custom-grid'>
                <Sidebar />
                <Lecture_3x2 />
            </div>
        </>
    )
}

export default Lecture_3x2_Main