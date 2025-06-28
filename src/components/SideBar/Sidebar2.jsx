import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faThumbsUp, faNoteSticky, faBookBookmark } from '@fortawesome/free-solid-svg-icons';

function Sidebar2({isOpen , onMenuToggle}) {
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
                slug: '/bookmark'
            },
    
        ]


return (
    <div className={` ${isOpen ? "flex" : "hidden"} w-full h-full md:hidden bg-black/50 backdrop-blur-xs  fixed top-0 left-0 ` }> 
    <div className={`
            flex flex-col gap-3 px-3 py-5 w-[60%]  h-full translate-x -left-100  absolute top-0 left-0  bg-blend-overlay bg-white   md:hidden`}>
        <div >
            <button onClick={onMenuToggle}  className="text-[1.2rem]">&#9776;</button>
        </div>
    <ul className=' w-full  flex flex-col items-center gap-4 border-b-1 border-gray-500 py-2 px-2'>
    {
        sideBarItems?.map((item, index)=>(
            <li key={index}
                className='  w-full px-6 py-3 border-0 rounded-2xl  hover:bg-gray-200  pointer-events-none   '>
                    <NavLink to={item.slug} className={({isActive})=> ` pointer-events-auto flex  items-center gap-4 flex-row  ${isActive ? "font-semibold" : "font-normal "}`}>
                    <FontAwesomeIcon icon={item.icon} className=' text-xl'/> 
                    <span className=' text-[0.7rem]  '> {item.text} </span>
                </NavLink>

            </li>
        ))
    }
    </ul>
    </div>
    </div>
)
}

export default Sidebar2
