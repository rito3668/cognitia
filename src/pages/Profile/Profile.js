import React from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import {useParams} from "react-router-dom"
function Profile() {
    const {user} = useAuthContext();
    const {id} = useParams()
  return (
    <div>

        Hello this is the user pages
        {user.displayName}
        {id}
    </div>
  )
}

export default Profile