import '../css/Dashboard.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import ListOfCourses from '../components/ListOfCourses'


function Dashboard() {
    return(
        <>
            <Navigation />

            {/* Left and Right */}
            <div className='custom-grid'>
                <Sidebar />
                <ListOfCourses />
            </div>
        </>
    )
}

export default Dashboard