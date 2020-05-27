import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchedMovie } from 'shared/models'
import { RootStore } from 'store/store.models'
import style from './similar-movies.module.scss'

import { MovieCard } from 'shared/components/movie-card/movie-card.component'

export const SimilarMovies: React.FC = (props) => {
  const moviesList: SearchedMovie[] = useSelector(
    (state: RootStore) => state.similarFilms.films
  )

  const [open, setOpen] = useState<boolean>(false)

  const toggle = () => setOpen(!open)

  const result = moviesList.map((movie, index) => (
    <MovieCard movie={movie} key={index} />
  ))
  const styleClass = open
    ? style.movies__container_open
    : style.movies__container_close
  return (
    <section>
      <h6 className={style.similar__header} onClick={toggle}>
        <span>Similar movies</span>
        <span className="material-icons">{`keyboard_arrow_${
          open ? 'up' : 'down'
        }`}</span>
      </h6>
      <ul className={styleClass}>{result}</ul>
    </section>
  )
}
