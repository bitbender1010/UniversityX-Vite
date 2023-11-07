import '../css/MainContent.css'
import ArrowIcon from '../assets/arrow.svg'
import BackIcon from '../assets/back.svg'

import VideoIcon from '../assets/video.svg'
import PDFIcon from '../assets/pdf.svg'

function CSC432_PDF_Sub() {

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
                <div className="loc font-medium">Courses &gt; Principles of Programming Language II (CSC 432) &gt; PDFs </div>
            </div>

            {/* Course Cards */}
            <a href={`/dashboard/csc432/pdfs/lecture-1`}>
            <div className='flex course-card justify-between items-start'>
                <div className='flex top-fix'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={PDFIcon}/>
                    </div>
                    <div className='top-fix-2'>Lecture 1</div>
                </div>

                <div className='flex right-icons top-fix-5'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

            <a href={`/dashboard/csc432/pdfs/lecture-2`}>
            <div className='flex course-card justify-between items-start'>
                <div className='flex top-fix'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={PDFIcon}/>
                    </div>
                    <div className='top-fix-2'>Lecture 2</div>
                </div>

                <div className='flex right-icons top-fix-5'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

            <a href={`/dashboard/csc432/pdfs/lecture-3x2`}>
            <div className='flex course-card justify-between items-start'>
                <div className='flex top-fix'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={PDFIcon}/>
                    </div>
                    <div className='top-fix-2'>Lecture 3.2</div>
                </div>

                <div className='flex right-icons top-fix-5'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

            <a href={`/dashboard/csc432/pdfs/lecture-3x3`}>
            <div className='flex course-card justify-between items-start'>
                <div className='flex top-fix'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={PDFIcon}/>
                    </div>
                    <div className='top-fix-2'>Lecture 3.3</div>
                </div>

                <div className='flex right-icons top-fix-5'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

            <a href={`/dashboard/csc432/pdfs/survey-of-pro-lang`}>
            <div className='flex course-card justify-between items-start'>
                <div className='flex top-fix'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={PDFIcon}/>
                    </div>
                    <div className='top-fix-2'>Survey of Programming Languages</div>
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

export default CSC432_PDF_Sub