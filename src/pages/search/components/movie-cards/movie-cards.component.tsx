import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
  requestMovies,
  requestTopMovies,
  requestFilteredMovies,
} from 'store/search/actions'
import { SearchReducer } from 'store/search/models'
import { FilterValues } from 'shared/models'
import { RootStore } from 'store/store.models'
import style from './movie-cards.module.scss'

import { MovieCard } from 'shared/components/movie-card/movie-card.component'
import { Pagination } from './components/pagination/pagination.component'

export const MovieCards: React.FC = () => {
  const dispatch = useDispatch()
  let history = useHistory()

  useEffect(() => {
    const searchType: string = history.location.search
      .split('=')[0]
      .replace('?', '')
    switch (searchType) {
      case 'top':
        dispatch(requestTopMovies())
        break
      case 'keyword':
        const searchedMovie: string = history.location.search.split('=')[1]
        dispatch(requestMovies(searchedMovie))
        break
      case 'filter':
        const filterDataArray: string[] = history.location.search.split('&')
        const filterData: FilterValues = {
          year: Number.parseInt(filterDataArray[1].split('=')[1]),
          genres: filterDataArray[2].split('=')[1].split(','),
          excludeAdult: !!filterDataArray[3].split('=')[1],
        }
        dispatch(requestFilteredMovies(filterData))
        break
    }
  }, [dispatch, history.location.search])

  const moviesState: SearchReducer = useSelector(
    (state: RootStore) => state.search
  )
  const moviesList = moviesState.films.map((movie) => (
    <MovieCard movie={movie} key={movie.id} />
  ))

  const moviesCount: number | null = moviesState.totalResult
  const userMessage = moviesCount
    ? `We've found ${moviesCount} movies for you`
    : `Sorry, no movies found yet`
  const showUserMessage = moviesCount !== null

  return (
    <div className={style.pageContainer}>
      {showUserMessage && (
        <h3 className={style.movies__message}>{userMessage}</h3>
      )}
      <ul className={style.movies__container}>{moviesList}</ul>
      {!!moviesCount && <Pagination />}
    </div>
  )
}
