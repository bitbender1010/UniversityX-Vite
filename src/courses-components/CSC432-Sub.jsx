import '../css/MainContent.css'
import ArrowIcon from '../assets/arrow.svg'
import BackIcon from '../assets/back.svg'

function CSC432Sub() {

    return(
        <>
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
                <div className="loc font-medium">Courses &gt; Principles of Programming Language II (CSC 432) </div>
            </div>

            {/* Course Cards */}
            <a href={`/dashboard/csc432/pdfs`}>
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

            <a href={`/dashboard/csc432/videos`}>
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
        </>
    )
}

export default CSC432Sub