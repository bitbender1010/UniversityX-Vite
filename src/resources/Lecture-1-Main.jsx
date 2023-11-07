import '../css/Dashboard.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import CourseContent from '../courses-components/CourseContent'

// CSC Imports
import Lecture_1 from './Lecture-1'


function Lecture_1_Main() {
    return(
        <>
            <Navigation />

            {/* Left and Right */}
            <div className='custom-grid'>
                <Sidebar />
                <Lecture_1 />
            </div>
        </>
    )
}

export default Lecture_1_Main