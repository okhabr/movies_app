import React from 'react'
import { useSelector } from 'react-redux'
import { SearchedMovie } from 'shared/models'
import { RootStore } from 'store/store.models'
import style from './movie-cards.module.scss'

import { MovieCard } from 'shared/components/movie-card/movie-card.component'

interface MovieCardsProps {
  open: boolean;
}

export const MovieCards: React.FC<MovieCardsProps> = (props) => {
  const moviesList: SearchedMovie[] = useSelector(
    (state: RootStore) => state.similarFilms.films
  )
  const result = moviesList.map((movie) => <MovieCard movie={movie} />)
  const styleClass = props.open
    ? style.movies__container_open
    : style.movies__container_close
  return <ul className={styleClass}>{result}</ul>
}
