import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {

  const { auth } = useSelector(state => state.user);

  useEffect(() => {
    if(!auth) {
      history.push('/auth')
    }
  })

  return (
    <>
      <Route 
        {...rest}
        render={(props) => (
          isAuth ? <Component {...props} /> : <Redirect to='/auth' />
        )}
      />
    </>
  )
}

 
export default ProtectedRoute;
