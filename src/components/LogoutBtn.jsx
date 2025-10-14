import { useState } from "react";
import { logout as storeLogout } from "../reduxSlices/authSlice.js";
import authService, { AuthService } from "../appwrite/auth.js";
import { useDispatch } from "react-redux";

function LogoutBtn({
    className = '',
}) {
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const logout = async()=>{
        setError('')
        try {
            await authService.logout()
            dispatch(storeLogout())
        } catch (error) {
            setError(error)
        }
      }

  return (
    <button
      className={` ${className}`}
      onClick={logout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
