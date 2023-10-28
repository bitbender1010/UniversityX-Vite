import Logo from '../assets/logo.png'
import UserProfile from '../assets/user.png'
import '../css/Navigation.css'


function Navigation() {

    return(
        <>
            <nav className='flex items-center justify-between navigation-nav'>
                <div> 
                <a href={`/`}> <img src={Logo} className='logo'/> </a>
                </div>

                <div>
                    <img src={UserProfile} className='user-profile'/>
                </div>
            </nav>
        </>
    )
}

export default Navigation