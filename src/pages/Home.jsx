import '../index.css'
import '../css/Home.css'

import Logo from '../assets/logo.png'
import HeroImg from '../assets/heroimg.png'
import Not from '../assets/not-icon.png'


const login = () => {

  const user = netlifyIdentity.currentUser();
  const isLoggedIn = user && user.id;

  if(isLoggedIn) {
    window.location.href = '/dashboard'
  } else {  
      netlifyIdentity.open('login')
      // Listen for the 'login' event
      netlifyIdentity.on('login', (user) => {
    
      // Redirect to the dashboard page after login
      window.location.href = '/dashboard'
    });

  }
};

const signup = () => {

  const user = netlifyIdentity.currentUser();
  const isLoggedIn = user && user.id;

  if(isLoggedIn) {
    window.location.href = '/dashboard'
  } else {  
      netlifyIdentity.open('signup')
      // Listen for the 'login' event
      netlifyIdentity.on('login', (user) => {

      // Redirect to the dashboard page after login
      window.location.href = '/dashboard'
    });
  }
};

const logout = () => {
  netlifyIdentity.logout();
  alert('You have been logged out')
  window.location.href = '/'
};


function Home() {
  const user = netlifyIdentity.currentUser();
  const isLoggedIn = user && user.id;

    return (
      <>
    <nav className="flex items-center flex-wrap body-padding p-3 mt-2 md:p-0-3">
      <a href="#" className="logo">
        <img src={Logo} />
      </a>

      <button className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler" data-target="#navigation">
        <i className="material-icons">menu</i>
      </button>

      <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto nav-items" id="navigation">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          
          <a href={`#`} className="lg:inline-flex px-5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>For Schools</span>
          </a>
         
          <a href="#" className="lg:inline-flex px-5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Contact Us</span>
          </a>

          <a className={`lg:inline-flex px-5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white ${isLoggedIn ? "hidebtn" : "showbtn"}`} onClick={login}>
            <span>Login</span>
          </a>

          <a className={`lg:inline-flex px-5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white ${isLoggedIn ? "showbtn" : "hidebtn"}`} onClick={logout}>
            <span>Logout</span>
          </a>

        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <div className='grid grid-cols-2 mt-10 grid-hero-left'>
      <div className='body-padding-left'> 
        <h1 className='font-semibold h1'>Study Smarter</h1>
        <div className='flex items-center'> <img src={Not} className='not-icon'/> <h1 className='font-semibold h1'>Harder...</h1> </div>
        <div className='text mt-5'>Access past online classes, download notes, course materials and past questions for <span className='font-semibold'>Computer Science - 400 Level</span> </div>
        <a onClick={signup}>
          <button className='get-started mt-10 font-medium'>Create Account</button> 
        </a>

        {/* Reserve Username */}
        <a className='reserve-name' onClick={login}>
          or <span className='font-medium'> Login into your account </span> 
        </a>
        {/* className='font-medium' */}
      </div>

      <div> 
        <img src={HeroImg} className='hero-img'/>
      </div>
    </div>
      </>
    )
  }
  
  export default Home