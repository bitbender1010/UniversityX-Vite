const login = () => {
  netlifyIdentity.open();
};

function Home() {
    
    return (
      <>
        <h1>Home</h1>
        {/* Render the login button */}
        <button onClick={login}>Log In</button>
      </>
    )
  }
  
  export default Home