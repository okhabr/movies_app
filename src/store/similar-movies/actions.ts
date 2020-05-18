import { searchTypes } from './types'
import { SearchedMovie } from 'shared/models'
import { getSimilar } from 'shared/constants/api'

export const toggleLoading = () => {
  return {
    type: searchTypes.REQUEST,
  }
}

export const requestSimilarMovies = (id: number) => async (dispatch: any) => {
  try {
    dispatch(toggleLoading())
    const res = await fetch(getSimilar(id))
    const results = await res.json()
    const movie: SearchedMovie[] = await results.results
    const movies: SearchedMovie[] = movie.map((item) => ({
      ...item,
      poster_path: `https://image.tmdb.org/t/p/w185/${item.poster_path}`,
    }))
    dispatch({
      type: searchTypes.SUCCESS,
      payload: movies,
    })
  } catch (err) {
    dispatch({
      type: searchTypes.ERROR,
      payload: err.message,
    })
  }
}
