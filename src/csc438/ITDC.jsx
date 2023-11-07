import '../css/MainContent.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'

import ArrowIcon from '../assets/arrow.svg'
import BackIcon from '../assets/back.svg'

function ITDC() {

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
            <a href={`/dashboard/csc438/pdfs`}>
            <div className='back-icon'>
                <img src={BackIcon}/>
                <div className='font-medium'>Back</div>
            </div>
            </a>
            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">Courses &gt; Computer Network / Communication (CSC 438)  &gt; PDFs  &gt; Introduction to Data Communications </div>
            </div>

            {/* PDF Iframe */}
            <div className='pdf-frame-container'>
            <iframe loading="lazy" src="https://drive.google.com/file/d/1GqwcHXQgdBTjJzswgKiFwfnkzP6hzRGT/preview" width="640" height="480" allow="autoplay" className='pdf-iframe'></iframe>
            </div>
         
            <a href='https://drive.google.com/uc?id=1GqwcHXQgdBTjJzswgKiFwfnkzP6hzRGT&export=download'> <button className='download-pdf'>Download PPT: 1.6MB</button> </a>

    </div>

    {/* Main Content - Ends... */}
    </div>
        </>
    )
}

export default ITDC