import './Avatar.css'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Avatar({src}) {
  return (
    <div className='avatar'>
        <img src={src} alt="user avatar" />
    </div>
  )
}