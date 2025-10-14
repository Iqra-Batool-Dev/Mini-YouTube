// import youtubeLogo from '../../public/svgs/icons8-youtube-48.svg'
import { NavLink } from 'react-router-dom'

function Logo({
  className = '',
}) {
  return (
    <div>
      <NavLink to='/' className='flex flex-row items-center text-gray-900'>
          <img src="/svgs/icons8-youtube-48.svg" alt="logo" />
          <span className={`${className}`}>MiniTube</span>
        </NavLink>
    </div>
  )
}
export default Logo
