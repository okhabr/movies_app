import React from 'react'
import style from './link.module.scss'
import { Link } from 'react-router-dom'

export const LinkToSearch: React.FC = () => {
  return (
    <Link to="" className={style.link}>
      Try it out
    </Link>
  )
}
