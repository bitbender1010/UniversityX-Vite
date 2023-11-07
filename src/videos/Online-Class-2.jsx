import '../css/MainContent.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'

import ArrowIcon from '../assets/arrow.svg'
import BackIcon from '../assets/back.svg'

function Online_Class_2() {

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
            <a href={`/dashboard/csc432/videos`}>
            <div className='back-icon'>
                <img src={BackIcon}/>
                <div className='font-medium'>Back</div>
            </div>
            </a>
            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">Courses &gt; Principles of Programming Language II (CSC 432)  &gt; Videos  &gt; Online Class 2.0 </div>
            </div>

            {/* PDF Iframe */}
            <div className='pdf-frame-container'>
            <iframe src="https://drive.google.com/file/d/1xB0rQyytZJJMr4mG0XF9UYOBzgWs6m9p/preview" width="640" height="480" allow="autoplay" className='pdf-iframe'></iframe>
            </div>
         
            <a href='https://drive.google.com/uc?id=1xB0rQyytZJJMr4mG0XF9UYOBzgWs6m9p&export=download'> <button className='download-pdf'>Download Video: 212mb </button> </a>

    </div>

    {/* Main Content - Ends... */}
    </div>
        </>
    )
}

export default Online_Class_2