import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  //    console.log(jwtToken)
  if (jwtToken === undefined) {
    return <Redirect to="/login" /> // Redirect to is used to redirect to the path before the UI excecuted
  }
  return <Route {...props} /> // by using spread operator we are giving "exact,path,component" of different components with route
}
export default ProtectedRoute
