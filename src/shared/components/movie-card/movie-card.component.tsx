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
    <span className={style.movie__genre}>{genre.name}</span>
  ))

  return (
    <Link to={ROUTES.MOVIE.route(movie.id)}>
      <li className={style.movie__scene}>
        <div className={style.movie__container}>
          <img
            src={movie.poster_path}
            key={movie.id}
            className={style.movie__card}
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
      </li>
    </Link>
  )
}
