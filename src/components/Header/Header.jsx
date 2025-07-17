import { Logo, Searchbar } from "../index.js";
import { useLocation } from "react-router-dom";


function Header({ onMenuToggle }) {
  const location =useLocation()
  
  if(location.pathname== '/login'||location.pathname== '/signup'){
      return null
  }

  
  return (
    <div className=" flex flex-row w-[100%] h-18 justify-between px-4 items-center">
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
      {/* <div className=" border-l-1">
        <p className=" border-none rounded-[50%] bg-blue-500 text-white text-center px-3 py-2 text-[1rem] ">A</p>
      </div> */}
    </div>
  );
}

export default Header;
