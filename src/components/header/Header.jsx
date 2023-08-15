import React from 'react'

import classes from './header.module.scss'

import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const headerNav = [
    {
      display: 'Home',
      path: '/'
    },
    {
      display: 'Movies',
      path: '/movie'
    },
    {
      display: 'TV Series',
      path: '/tv'
    }
  ]

  const { pathname } = useLocation()

  const active = headerNav.findIndex((e) => e.path === pathname)

  return (
    <div className={classes.navContainer}>
      <Link to="/" className={classes.title}>
        films&dramas
      </Link>
      <ul>
        {headerNav.map((e, i) => (
          <li key={i} className={`${i === active ? classes['active'] : ''}`}>
            <Link to={e.path}>{e.display}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header
