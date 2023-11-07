import '../css/Dashboard.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import CourseContent from '../courses-components/CourseContent'

// CSC Imports
import Lecture_2 from './Lecture-2'


function Lecture_2_Main() {
    return(
        <>
            <Navigation />

            {/* Left and Right */}
            <div className='custom-grid'>
                <Sidebar />
                <Lecture_2 />
            </div>
        </>
    )
}

export default Lecture_2_Main