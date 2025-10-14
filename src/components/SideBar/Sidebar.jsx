import { NavLink , useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faThumbsUp, faNoteSticky, faBookBookmark } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {

    const sideBarItems = [
        {
            icon: faHome,
            text: "Home",
            slug: '/'
        },
        {
            icon: faThumbsUp,
            text: "Liked",
            slug: '/liked'
        },
        {
            icon: faNoteSticky,
            text: "Notes",
            slug: "/notes"
        },
        {
            icon: faBookBookmark,
            text: "Bookmarked",
            slug: '/bookmarks'
        },

    ]

    const location =useLocation()

    if(location.pathname== '/login'||location.pathname== '/signup'){
        return null
    }


  return (
    <div className=' w-[10%] xl:w-[15%] hidden md:flex flex-col flex-1 items-center px-1  '>
      <ul className=' w-full  flex flex-col items-center gap-4 border-b-1 border-gray-400 py-2 px-2'>
       {
        sideBarItems?.map((item, index)=>(
            <li key={index}
                className='  w-full px-6 py-3 border-0 rounded-2xl transition-all duration-300 text-gray-900  hover:bg-gray-200  pointer-events-none   '>
                    <NavLink to={item.slug} className={({isActive})=> ` pointer-events-auto flex flex-col  items-center gap-2 xl:gap-4 xl:flex-row  ${isActive ? "font-semibold" : "font-normal "}`}>
                    <FontAwesomeIcon icon={item.icon} className=' text-xl'/> 
                    <span className=' text-[0.7rem] xl:text-[1rem] '> {item.text} </span>
                </NavLink>
            </li>
        ))
    }
    </ul>
    </div>
  )
}
 

export default Sidebar
