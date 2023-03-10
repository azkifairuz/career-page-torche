import React from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {
  const { icon, title, href } = props
  return (
    <li className='px-4 py-3 hover:bg-slate-500 rounded-lg font-rajdhani font-medium' >
      <Link to={href} className='flex gap-6 items-center'>
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  )
}
