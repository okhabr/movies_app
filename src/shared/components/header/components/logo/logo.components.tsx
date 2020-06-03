import React from 'react'
import style from './logo.module.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/constants/routes'

export const Logo: React.FC = () => {
  return (
    <Link to={ROUTES.HOME} className={style.logo}>
      <span className={style.logo__pic}>
        <span className="material-icons">theaters</span>
      </span>
    </Link>
  )
}
