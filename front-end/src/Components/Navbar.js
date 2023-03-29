import React from 'react'
import logo from '../Components/images/logo.png'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'
import { useContext } from 'react'

function Navbar() {
  const {user, dispatch} = useContext(Context)
  const PF ="http://localhost:3002/images/"

  const handleLogout = ()=>{
    dispatch({type: "LOGOUT"})
  }
  return (
    <div >
      <div className='container nav pt-2'>
        <div className='nav-wrapper'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='nav-wrapper'>
          <Link to="/"><p className='links'>Home</p></Link> 
          <Link to="blogs"><p className='links'>Blog</p></Link>
          <Link to="write"><p className='links'>Write</p></Link>
        </div>
        <div className='nav-wrapper '>
          {user ? (<>
            <img src={PF+user.photo} alt="profile" className='user-img'/>
           <Link to="profile"><p className='pe-2'>{user.username}</p></Link>
           <p onClick={handleLogout}>{user && "LOGOUT"}</p>
          </>): (
          <>
          <Link to="login"><p className='pe-2'>Log-In</p></Link>
          <Link to="register"><p>Sign-Up</p></Link>
          
          </>
          )}
          
         
          
        </div>
      </div>
  </div>
  )
}

export default Navbar