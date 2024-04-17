import {RiLogoutCircleLine} from 'react-icons/ri'
import useLogout from '../../hooks/useLogout'
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  const {loading, logout} = useLogout()

  return (
    <div className='mt-auto flex items-center'>
      {!loading ? (
        <RiLogoutCircleLine onClick={logout} className='w-6 h-6 text-white cursor-pointer' />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
      <Link to="https://github.com/nnmai-mabel/chatsavvy" className="text-white ml-2" target="_blank" rel="noopener noreferrer">Source code</Link> 
    </div>
  )
}

export default LogoutButton
