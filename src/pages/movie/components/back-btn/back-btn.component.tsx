import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import style from './back-btn.module.scss'

export const BackBtn: React.FC = () => {
  const history = useHistory()
  const handleClick = () => history.goBack()
  return (
    <button className={style.btn} onClick={handleClick}>
      Back to search
    </button>
  )
}
