import React from 'react'
import { Logo } from './components/logo.components'
import style from './header.module.scss'
import { Link } from 'react-router-dom'
import { SearchInput } from 'shared/components/search-input/search-input.component'

export const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <Logo />
      <div className={style.menu}>
        <SearchInput />
        <Link to="" className={style.menu__link}>
          Register
        </Link>
        <Link to="" className={style.menu__link}>
          Login
        </Link>
      </div>
    </div>
  )
}
