import youtubeLogo from '../../public/svgs/icons8-youtube-48.svg'
import { NavLink } from 'react-router-dom'

function Logo({
  className = '',
}) {
  return (
    <div>
      <NavLink to='/' className='flex flex-row items-center'>
          <img src={youtubeLogo} alt="logo" />
          <span className={`${className}`}>MiniTube</span>
        </NavLink>
    </div>
  )
}

export default Logo
