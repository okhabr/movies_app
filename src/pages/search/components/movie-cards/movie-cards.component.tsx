import React from 'react'
import { useSelector } from 'react-redux'
import { SearchReducer } from 'store/search/models';
import { RootStore } from 'store/store.models'
import style from './movie-cards.module.scss'

import { MovieCard } from 'shared/components/movie-card/movie-card.component'

export const MovieCards: React.FC = () => {
  const moviesState: SearchReducer = useSelector(
    (state: RootStore) => state.search
  )
  const moviesList = moviesState.films.map((movie) => (
    <MovieCard movie={movie} key={movie.id} />
  ))

  const moviesCount: number | null = moviesState.totalResult
  const userMessage = moviesCount ? `We've found ${moviesCount} movies for you` : `Sorry, no movies found yet`;
  const showUserMessage = moviesCount!==null;

  return (
    <div className={style.pageContainer}>
     {showUserMessage && <h3 className={style.movies__message}>{userMessage}</h3>}
      <ul className={style.movies__container}>{moviesList}</ul>
    </div>
  )
}
