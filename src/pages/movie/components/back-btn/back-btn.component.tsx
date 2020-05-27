import React from 'react'
import { useHistory } from 'react-router-dom'
import style from './back-btn.module.scss'

export const BackBtn: React.FC = () => {
  const history = useHistory()
  const handleClick = () => history.goBack()
  return (
    <div className={style.back__container}>
      <button className={style.back__btn} onClick={handleClick}>
        Back to search
      </button>
    </div>
  )
}
