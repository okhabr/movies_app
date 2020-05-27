import React from 'react'
import img from 'assets/Search.jpg'
import style from './top-twenty.module.scss'

interface GetTopTwentyProps {
  handleClick: any;
}

export const GetTopTwenty: React.FC<GetTopTwentyProps> = (props) => {
  return (
    <div className={style.top__container}>
      <img className={style.top__pic} src={img} alt="People" />
      <button className={style.top__get} onClick={props.handleClick}>
        Get top rated
      </button>
    </div>
  )
}
