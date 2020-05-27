import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { requestMovieDetails, clearMovie } from 'store/movie/actions'
import { requestSimilarMovies } from 'store/similar-movies/actions'
import { RootStore } from 'store/store.models'
import { MovieDetails } from 'shared/models'

import { AdditinalInfo } from './components/additional-info/additional-info.component'
import { BackBtn } from './components/back-btn/back-btn.component'
import { MovieGenres } from './components/movie-genres/movie-genres.component'
import { SimilarMovies } from './components/similar-movies/similar-movies.component'

import style from './movie.module.scss'

export const Movie: React.FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const film: MovieDetails = useSelector(
    (state: RootStore) => state.filmDetails.film
  )

  const additionalInfo = {
    Rate: film.vote_average,
    Runtime: `${film.runtime} minutes`,
    Popularity: `${film.popularity} views`,
    Year: film.release_date.split('-')[0],
    Countries: film.production_countries.map((country) => country.name).join(),
    Budget: `$ ${film.budget}`,
    Revenue: `$ ${film.revenue}`,
  }

  useEffect(() => {
    dispatch(requestMovieDetails(id))
    dispatch(requestSimilarMovies(id))
    return function cleanup() {
      dispatch(clearMovie())
    }
  }, [dispatch, id])

  return (
    <div className={style.movie__container}>
      <div>
        <img
          src={film.poster_path}
          alt="Movie poster"
          className={style.movie__poster}
        />
      </div>
      <div className={style.movie__content}>
        <h2 className={style.movie__header}>{film.title}</h2>
        <h3 className={style.movie__tagline}>{film.tagline}</h3>
        <p className={style.movie__description}>{film.overview}</p>
        <AdditinalInfo data={additionalInfo} />
        <MovieGenres genres={film.genres} />
        <SimilarMovies />
        <BackBtn />
      </div>
    </div>
  )
}
