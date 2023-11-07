import '../css/MainContent.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'

import ArrowIcon from '../assets/arrow.svg'
import BackIcon from '../assets/back.svg'

import VideoIcon from '../assets/video.svg'
import PDFIcon from '../assets/pdf.svg'

function CSC438_Video() {

    return(
        <>
        {/* Navigation and Sidebar */}
        <Navigation />

        {/* Left and Right */}
        <div className='custom-grid'>
        <Sidebar />

        {/* Main Content - Begins... */}
        <div className='main-content'>
            {/* Back Icon */}
            <a href={`/dashboard/csc438`}>
            <div className='back-icon'>
                <img src={BackIcon}/>
                <div className='font-medium'>Back</div>
            </div>
            </a>
            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">Courses &gt; Computer Network / Communication (CSC 438) &gt; Videos </div>
            </div>

            {/* Course Cards */}
            <a href={`/dashboard/csc438/videos/online-class-1`}>
            <div className='flex course-card justify-between items-start'>
                <div className='flex top-fix'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={VideoIcon}/>
                    </div>
                    <div className='top-fix-2'>Online Class 1.0</div>
                </div>

                <div className='flex right-icons top-fix-5'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

        </div>

        {/* Main Content - Ends... */}
        </div>
        </>
    )
}

export default CSC438_Video