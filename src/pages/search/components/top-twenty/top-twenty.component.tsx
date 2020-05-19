import React from 'react'
import { useSelector } from 'react-redux'
import { SearchedMovie } from 'shared/models'
import { RootStore } from 'store/store.models'
import style from './top-twenty.module.scss'

import { MovieCard } from 'shared/components/movie-card/movie-card.component'

interface GetTopTwentyProps {
  handleClick: any;
}

export const GetTopTwenty: React.FC<GetTopTwentyProps> = (props) => {
  return (
    <button className={style.getTop} onClick={props.handleClick}>
      Get top 20
    </button>
  )
}
