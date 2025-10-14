import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import LogoutBtn from "./LogoutBtn"

function ProfilePopup({isOpen , onUpdatePopup}) {


    const user = useSelector(state=>state.auth.userData)
    const initials = user?.name.split(' ').map((word)=> word[0])

    const popupRef = useRef()
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (popupRef.current.contains(event.target)) {
            onUpdatePopup(false); // Clicked outside → close popup
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
    
    <div ref={popupRef} className={`${isOpen? 'block' : 'hidden'} w-[100%] h-full relative  `}>
    {user&&(
        <div className=' w-80 border-none rounded-2xl shadow-lg shadow-gray-300 bg-blue-50 flex flex-col gap-2 items-center absolute top-1 right-2 p-2 '>
            <div  className='text-[1rem]  w-10 h-10 text-white text-center border-none rounded-full p-2 bg-blue-500 '>
            {initials}
            </div>
            <h3 className=" text-[1rem] text-black text-center">{user.name}</h3>
            <p className=" text-[0.8rem] text-black text-center">{user.email}</p>

            <LogoutBtn className=" border-1 border-black w-48 my-2 p-1 rounded-full hover:bg-blue-100 text-blue-500 text-[0.9rem]"/>
            
        </div>
    )}
    </div>

    )
}

export default ProfilePopup
