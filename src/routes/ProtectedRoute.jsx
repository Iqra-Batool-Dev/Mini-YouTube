import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export function ProtectedRoute({children}) {
    const navigate = useNavigate()
    const isAuthenticated = useSelector(state => state.auth.authStatus)

    if(!isAuthenticated){
        return navigate('/login')
    }

  return children
}


