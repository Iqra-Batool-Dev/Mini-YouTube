import { useSelector } from 'react-redux'
import { useState } from 'react'
import ProfilePopup from './ProfilePopup.jsx'


function Profile() {
  const [isPopupOpen, setPopupOpen] = useState(false)
  const user = useSelector(state=>state.auth.userData)
  
    const initials = user?.name.split(' ').map(word => word[0])

    // const randomColor = '#' + Math.floor(Math.random()* 16777215).toString(16)
    
    return (
    <div>
    {initials &&  (
      <button className='text-[1rem] hidden md:block w-10 h-10 text-white text-center border-none rounded-full p-2 bg-blue-500 ' onClick={()=>setPopupOpen(!isPopupOpen)}>
        {initials}
      </button>)}
      <ProfilePopup isOpen = {isPopupOpen}  onUpdatePopup= {setPopupOpen}/>
    </div>
    )
}

export default Profile
