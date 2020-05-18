import { MovieReducer } from './models'
import { movieTypes } from './types'
import { MovieDetails } from 'shared/models'

const starterMovie: MovieDetails = {
  id: 0,
  adult: false,
  genres: [],
  tagline: '',
  title: '',
  vote_average: 0,
  popularity: 0,
  release_date: '',
  revenue: 0,
  budget: 0,
  runtime: 0,
  production_countries: [],
  overview: '',
  poster_path: '',
  backdrop_path: '',
}

const initialState: MovieReducer = {
  film: starterMovie,
  loading: false,
  error: '',
}
export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case movieTypes.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case movieTypes.SUCCESS:
      return {
        ...state,
        film: action.payload,
        loading: false,
      }
    case movieTypes.CLEAR:
      return {
        ...state,
        film: starterMovie
      }
    case movieTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
