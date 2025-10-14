import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faThumbsUp,faNoteSticky,faBookBookmark,} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef , useState} from "react";
import { useDispatch, useSelector } from "react-redux"
// import {Button} from '../index.js'
import LogoutBtn from "../LogoutBtn.jsx"

function Sidebar2({ isOpen, onMenuToggle, onUpdateSidebar }) {
  const sideBarItems = [
    {
      icon: faHome,
      text: "Home",
      slug: "/",
    },
    {
      icon: faThumbsUp,
      text: "Liked",
      slug: "/liked",
    },
    {
      icon: faNoteSticky,
      text: "Notes",
      slug: "/notes",
    },
    {
      icon: faBookBookmark,
      text: "Bookmarked",
      slug: "/bookmarks",
    },
  ];

      // const dispatch = useDispatch()
      // const [error, setError]= useState()
  
      const user = useSelector(state=>state.auth.userData)
      const initials = user?.name.split(' ').map((word)=> word[0])

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current.contains(event.target)) {
        onUpdateSidebar(false); // Clicked outside → close menu
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={` ${
        isOpen ? "flex" : "hidden"
      } w-full h-full md:hidden bg-black/50 backdrop-blur-xs  fixed top-0 left-0 `}
    >
      <div
        className={`
            flex flex-col gap-3 px-3 py-3 w-[60%]  h-full translate-x -left-100  absolute top-0 left-0  bg-blend-overlay bg-white   md:hidden`}
      >
      {/* close button */}
        <div className=" text-right text-gray-900">
          <button
            onClick={onMenuToggle}
            className="text-[1.2rem]  "
          >
            &#x2715;
          </button>
        </div>

        {/* profile section */}
        <div className="  flex flex-col justify-around items-center gap-1">
            <div  className='text-[1rem]  w-10 h-10 text-white text-center border-none rounded-full p-2 bg-blue-500 '>
            {initials}
            </div>
            <h3 className=" text-[1rem] text-gray-900 text-center">{user?.name}</h3>
            {/* <p className=" text-[0.8rem] text-black text-center">{user?.email}</p> */}
        </div>

        <ul className=" w-full  flex flex-col items-center gap-4 border-b-1 border-gray-300 py-2 px-2">
          {sideBarItems?.map((item, index) => (
            <li
              key={index}
              className="  w-full px-6 py-3 border-0  rounded-2xl text-gray-900  hover:bg-gray-200  pointer-events-none   "
            >
              <NavLink
                to={item.slug}
                className={({ isActive }) =>
                  ` pointer-events-auto flex  items-center gap-4 flex-row  ${
                    isActive ? "font-semibold" : "font-normal "
                  }`
                }
              >
                <FontAwesomeIcon icon={item.icon} className=" text-xl" />
                <span className=" text-[0.7rem]  "> {item.text} </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <LogoutBtn className= " bg-blue-100 p-1 text-gray-900 text-[0.9rem] border-none rounded-sm" />
      </div>
    </div>
  );
}

export default Sidebar2;
