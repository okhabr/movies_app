import React from 'react'
import { useSelector } from 'react-redux'
import { SearchedMovie } from 'shared/models'
import { RootStore } from 'store/store.models'
import style from './movie-cards.module.scss'

import { MovieCard } from 'shared/components/movie-card/movie-card.component'

export const MovieCards: React.FC = () => {
  const moviesList: SearchedMovie[] = useSelector(
    (state: RootStore) => state.search.films
  )
  const result = moviesList.map((movie) => <MovieCard movie={movie} key={movie.id}/>)
  return (
    <div className={style.pageContainer}>
      <ul className={style.movies__container}>{result}</ul>
    </div>
  )
}
