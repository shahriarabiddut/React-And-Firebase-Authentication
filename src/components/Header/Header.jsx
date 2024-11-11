import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const links = <> <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>  </>
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ReactFirebase</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
</div>
    </div>
  )
}
