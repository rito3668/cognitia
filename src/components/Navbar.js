// import styles from './Navbar.module.css'
import "./navbar.css"
import React from 'react'
import {Link} from 'react-router-dom'
import {useLogout} from "../hooks/useLogout"
import  {useAuthContext}  from '../hooks/useAuthContext'
import Avatar from "./Avatar/Avatar"
export default function Navbar() {
    const {logout} = useLogout()
    const { user } = useAuthContext()
  return (
    <nav className="navbar">
        <ul>
            <li className="title text-sm"><Link to="/">Edu connect Hub</Link></li>
            {!user && (
            <>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
            </>
            )}
            {user &&(
                <>
                <li className="mr-5 text-sm"><Link to="/create/project">Create Project</Link></li>
                <li className="mr-10 text-sm"><Link to="/create/article">Create Article</Link></li>
                <li className="mr-16 text-sm"><Link to="/create/question">Create PYQ</Link></li>
                <li className="mr-5">hello,{user.displayName}</li>
                
                <Link to={`/users/${user.uid}`}><Avatar src={user.photoURL}/></Link>
                
                
                
                <li>
                  
                <button className="btn bg-green-500 px-4 py-2 text-white rounded-md" onClick={logout}>Logout</button>
                </li>
                </>
              )
            }
        </ul>
    </nav>
  )
}