import '../css/MainContent.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'

import ArrowIcon from '../assets/arrow.svg'
import BackIcon from '../assets/back.svg'

function CSC438_Online_Class_1() {

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
            <a href={`/dashboard/csc438/videos`}>
            <div className='back-icon'>
                <img src={BackIcon}/>
                <div className='font-medium'>Back</div>
            </div>
            </a>
            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">Courses &gt; Computer Network / Communication (CSC 438)  &gt; Videos  &gt; Online Class 1.0 </div>
            </div>

            {/* PDF Iframe */}
            <div className='pdf-frame-container'>
            <iframe src="https://drive.google.com/file/d/1jASOEJ6YBNAz_5fkbDQOR3cQiv9SFUtx/preview" width="640" height="480" allow="autoplay" className='pdf-iframe'></iframe>
            </div>
         
            <a href='https://drive.google.com/uc?id=1jASOEJ6YBNAz_5fkbDQOR3cQiv9SFUtx&export=download'> <button className='download-pdf'>Download Video: 99.5 MB </button> </a>

    </div>

    {/* Main Content - Ends... */}
    </div>
        </>
    )
}

export default CSC438_Online_Class_1