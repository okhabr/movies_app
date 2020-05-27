import { searchTypes } from './types'
import { SearchedMovie } from 'shared/models'
import {FilterValues} from 'shared/models'
import { api, getTop, filterMovies } from 'shared/constants/api'

export const toggleLoading = () => {
  return {
    type: searchTypes.REQUEST,
  }
}

export const clearMovies = () => {
  return {
    type: searchTypes.CLEAR,
  }
}

export const requestMovies = (keyWord: string) => async (dispatch: any) => {
  try {
    dispatch(toggleLoading())
    const res = await fetch(`${api}${keyWord}`)
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

export const requestFilteredMovies = (filterValues:FilterValues) => async (dispatch: any) => {
  try {
    dispatch(toggleLoading())
    const res = await fetch(filterMovies(filterValues))
    const results = await res.json()
    const movie: SearchedMovie[] = await results.results
    const movies: SearchedMovie[] = movie.map((item) => ({
      ...item,
      poster_path: `https://image.tmdb.org/t/p/w185/${item.poster_path}`,
    }))
    console.log(filterMovies(filterValues));
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


export const requestTopMovies = () => async (dispatch: any) => {
  try {
    dispatch(toggleLoading())
    const res = await fetch(getTop)
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
