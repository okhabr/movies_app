import React from 'react'
import { Logo } from './components/logo/logo.components'
import style from './header.module.scss'
import {Login} from './components/login/login.components';
import { SearchInput } from 'shared/components/search-input/search-input.component'

export const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <Logo />
      <div className={style.menu}>
        <SearchInput />
        <Login/>
      </div>
    </div>
  )
}
