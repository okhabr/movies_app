import React from 'react'
import style from './movie-genres.module.scss'
import { Genre } from 'shared/constants/genres'

interface MovieGenresProps {
  genres: Genre[];
}

export const MovieGenres: React.FC<MovieGenresProps> = (props) => {
  const genres: Genre[] = props.genres
  const movieGenres = genres.map((genre) => (
    <span className={style.genres__item} key={genre.id}>
      {genre.name}
    </span>
  ))

  return (
    <section className={style.genres__sectionWrapper}>
      <h6 className={style.genres__header}>Genres</h6>
      {movieGenres}
    </section>
  )
}
