import './App.css'
import Home from './pages/Home'
import About from './pages/About'

import { Routes, Route, Navigate } from 'react-router-dom'

const PrivateRoute = ({ element: Component, ...rest }) => {
  const user = netlifyIdentity.currentUser();
  const isLoggedIn = user !== null;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Component />
        ) : (
          <Navigate
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

function App() {

  const user = netlifyIdentity.currentUser();
  const isLoggedIn = user && user.id;

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={isLoggedIn ? <About /> : <Navigate to="/" />}
      />
    </Routes>
    </>
  )
}

export default App
