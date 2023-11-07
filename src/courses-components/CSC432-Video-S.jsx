import '../css/MainContent.css'
import ArrowIcon from '../assets/arrow.svg'
import BackIcon from '../assets/back.svg'

import VideoIcon from '../assets/video.svg'
import PDFIcon from '../assets/pdf.svg'

function CSC432_Video_Sub() {

    return(
        <>
        <div className='main-content'>
            {/* Back Icon */}
            <a href={`/dashboard/csc432`}>
            <div className='back-icon'>
                <img src={BackIcon}/>
                <div className='font-medium'>Back</div>
            </div>
            </a>
            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">Courses &gt; Principles of Programming Language II (CSC 432) &gt; Videos </div>
            </div>

            {/* Course Cards */}
            <a href={`/dashboard/csc432/videos/online-class-2`}>
            <div className='flex course-card justify-between items-start'>
                <div className='flex top-fix'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={VideoIcon}/>
                    </div>
                    <div className='top-fix-2'>Online Class 2.0</div>
                </div>

                <div className='flex right-icons top-fix-5'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

        </div>
        </>
    )
}

export default CSC432_Video_Sub