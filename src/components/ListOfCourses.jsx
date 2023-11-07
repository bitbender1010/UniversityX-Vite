import '../css/MainContent.css'
import InfoIcon from '../assets/info.svg'
import ArrowIcon from '../assets/arrow.svg'

function ListOfCourses() {

    return(
        <>
        <div className='main-content'>
            <div>
                <div className='school mb-2'> 
                    <span className='font-medium'>School: </span>
                    <span>Lagos State University</span>
                </div>

                <div className='department mb-2'> 
                    <span className='font-medium'>Department: </span>
                    <span>Computer Science</span> 
                </div>

                <div className='department'> 
                    <span className='font-medium'>Level: </span>
                    <span>400</span> 
                </div>
            </div>

            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">List Of Courses (2)</div>
            </div>

            {/* Course Cards */}
            <a href={`/dashboard/csc432`}>
            <div className='flex justify-between items-start course-card'>
                <div>Principles of Programming Language II (CSC 432)</div>

                <div className='flex right-icons'>
                    <img src={InfoIcon} className='info-icon'/>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

            <a href={`/dashboard/csc438`}>
            <div className='flex justify-between items-start course-card'>
                <div>Computer Network / Communication (CSC 438)</div>

                <div className='flex right-icons'>
                    <img src={InfoIcon} className='info-icon'/>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>


        </div>
        </>
    )
}

export default ListOfCourses