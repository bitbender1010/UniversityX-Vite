import '../css/MainContent.css'
import ArrowIcon from '../assets/arrow.svg'
import BackIcon from '../assets/back.svg'

function Lecture_3x3() {

    return(
        <>
        <div className='main-content'>
            {/* Back Icon */}
            <a href={`/dashboard/csc432/pdfs`}>
            <div className='back-icon'>
                <img src={BackIcon}/>
                <div className='font-medium'>Back</div>
            </div>
            </a>
            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">Courses &gt; Principles of Programming Language II (CSC 432)  &gt; PDFs  &gt; Lecture 3.3 </div>
            </div>

            {/* PDF Iframe */}
            <div className='pdf-frame-container'>
            <iframe loading="lazy" src="https://drive.google.com/file/d/1IGK3fbXS0fqE2kOvYylzqqkCQa4SzhkK/preview" width="640" height="480" allow="autoplay" className='pdf-iframe'></iframe>
            </div>
         
            <a href='https://drive.google.com/uc?id=1IGK3fbXS0fqE2kOvYylzqqkCQa4SzhkK&export=download'> <button className='download-pdf'>Download PDF</button> </a>

    </div>
        </>
    )
}

export default Lecture_3x3