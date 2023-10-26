// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import netlifyIdentity from 'netlify-identity-widget';

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const user = netlifyIdentity.currentUser();
//   const isLoggedIn = user !== null;

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isLoggedIn ? (
//           <Component />
//         ) : (
//           <Navigate
//             to={{
//               pathname: '/',
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
