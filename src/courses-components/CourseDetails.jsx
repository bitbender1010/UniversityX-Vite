import '../css/MainContent.css'
import ArrowIcon from '../assets/arrow.svg'
import BackIcon from '../assets/back.svg'

import VideoIcon from '../assets/video.svg'
import PDFIcon from '../assets/pdf.svg'

function CourseDetails() {

    return(
        <>
        <div className='main-content'>
            {/* Back Icon */}
            <a href={`/dashboard/course-dashboard`}>
            <div className='back-icon'>
                <img src={BackIcon}/>
                <div className='font-medium'>Back</div>
            </div>
            </a>
            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">Courses &gt; Computer as a Problem Solving Tool (CSC 120) &gt; Concept of problem solving </div>
            </div>

            {/* Course Cards */}
            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active cn-icon-padding'>
                        <img src={VideoIcon}/>
                    </div>
                    <div>Video: Cambridge IGCSE Computer Science</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>

                <div className='long-line'> </div>
            </div>

            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active cn-icon-padding'>
                        <img src={PDFIcon}/>
                    </div>
                    <div>Book: Number system</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>

                <div className='long-line'> </div>
            </div>

            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active cn-icon-padding'>
                        <img src={VideoIcon}/>
                    </div>
                    <div>Video: Data Structures and Algorithms Made Easy</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>

            <div className='flex course-card justify-between items-start'>
                <div className='flex'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={VideoIcon}/>
                    </div>
                    <div>Video: Algorithm Manual</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>

            <div className='flex course-card justify-between items-start'>
                <div className='flex'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={PDFIcon}/>
                    </div>
                    <div>Summary Video</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
        
        </div>
        </>
    )
}

export default CourseDetails