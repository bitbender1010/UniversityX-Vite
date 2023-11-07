import '../css/MainContent.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'

import ArrowIcon from '../assets/arrow.svg'
import BackIcon from '../assets/back.svg'

function CSC438() {

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
            <a href={`/dashboard`}>
            <div className='back-icon'>
                <img src={BackIcon}/>
                <div className='font-medium'>Back</div>
            </div>
            </a>
            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">Courses &gt; Computer Network / Communication (CSC 438) </div>
            </div>

            {/* Course Cards */}
            <a href={`/dashboard/csc438/pdfs`}>
            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-inactive'>1</div>
                    <div>PDFs</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>

            </div>
            </a>

            <a href={`/dashboard/csc438/videos`}>
            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-inactive'>2</div>
                    <div>Live Classes</div>
                </div>

                <div className='flex right-icons'>
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

export default CSC438