import React from 'react'
import { Link } from 'react-router-dom'

import { SearchedMovie } from 'shared/models'
import style from './movie-card.module.scss'

import { genres } from 'shared/constants/genres'
import { ROUTES } from 'shared/constants/routes'

interface movieCardProps {
  movie: SearchedMovie;
}

export const MovieCard: React.FC<movieCardProps> = (props) => {
  const movie = props.movie
  const genresNumbers = props.movie.genre_ids
  const genresObj = genres.filter((genre) => genresNumbers.includes(genre.id))

  const genresNames = genresObj.map((genre) => (
    <span className={style.movie__genre} key={genre.id}>
      {genre.name}
    </span>
  ))

  return (
    <li className={style.movie__scene}>
      <Link to={ROUTES.MOVIE.route(movie.id)}>
        <div className={style.movie__container}>
          <img
            src={movie.poster_path}
            className={style.movie__card}
            alt="Movie poster"
          />
          <div className={style.movie__info}>
            <h3 className={style.movie__title}>{movie.title}</h3>
            <p className={style.movie__details}>
              <span>Rate</span> <span>{movie.vote_average}</span>
            </p>
            <p className={style.movie__details}>
              <span>Year</span> <span>{movie.release_date.split('-')[0]}</span>
            </p>
            {genresNames}
          </div>
        </div>
      </Link>
    </li>
  )
}
