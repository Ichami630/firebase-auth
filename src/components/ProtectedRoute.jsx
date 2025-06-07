import { UseAuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const { currentUser } = UseAuthContext();
  return currentUser ? children : <Navigate to="/login" />
}

export default ProtectedRoute