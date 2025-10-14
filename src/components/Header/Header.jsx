import { Button, Logo, Searchbar } from "../index.js";
import { useLocation , useNavigate } from "react-router-dom";
import {Profile} from '../index.js'
import { useSelector } from "react-redux";


function Header({ onMenuToggle }) {
  const location =useLocation()
  const navigate = useNavigate()
  const isAuthenticated= useSelector(state=> state.auth.authStatus) //checking auth status of user
  
  if(location.pathname== '/login'||location.pathname== '/signup'){
      return null
  }
  else{
  return (
    <Header className=" flex flex-row w-[100%] h-18 justify-between px-4 items-center bg-white sticky top-0 left-0 z-50">
      <div className=" flex gap-1 justify-center items-center">
      <div className="md:hidden">
        <button onClick={onMenuToggle} className=" text-[1.2rem] border border-black px-1 rounded-sm">
          &#9776;
        </button>
      </div>
      <div>
        <Logo className="hidden md:inline" />
      </div>
      </div>
      <div>
        <Searchbar />
      </div>
      {isAuthenticated? (
      <div>
        <Profile/>
      </div>
      ):(
        <div className=" flex flex-row gap-2">
        <Button className="w-30 py-1 px-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 " onClick={()=>navigate('/signup')}>
          Signup
        </Button>
        <Button className="w-30 py-1 px-2 border-2 border-blue-400 text-blue-400  hover:text-white rounded-2xl hover:bg-blue-400 " onClick={()=>navigate('/login')}>
          Login
        </Button>
        
        </div>
      )}
    </Header>
  );
  }
}

export default Header;
