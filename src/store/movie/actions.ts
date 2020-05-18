import { movieTypes } from './types'
import { MovieDetails } from 'shared/models'
import { movieDetailsAPI } from 'shared/constants/api'

export const toggleLoading = () => {
  return {
    type: movieTypes.REQUEST,
  }
}

export const requestMovieDetails = (id: number) => async (dispatch: any) => {
  try {
    dispatch(toggleLoading())
    const res = await fetch(movieDetailsAPI(id))
    const result = await res.json()
    const movie: MovieDetails = {
      ...result,
      poster_path: `https://image.tmdb.org/t/p/w185/${result.poster_path}`,
    }
    dispatch({
      type: movieTypes.SUCCESS,
      payload: movie,
    })
  } catch (err) {
    dispatch({
      type: movieTypes.ERROR,
      payload: err.message,
    })
  }
}
