import '../css/Dashboard.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import CourseContent from '../courses-components/CourseContent'

// CSC Imports
import CSC432_PDF_Sub from '../courses-components/CSC432-Pdf-S'


function CSC432_PDF_Main() {
    return(
        <>
            <Navigation />

            {/* Left and Right */}
            <div className='custom-grid'>
                <Sidebar />
                <CSC432_PDF_Sub />
            </div>
        </>
    )
}

export default CSC432_PDF_Main