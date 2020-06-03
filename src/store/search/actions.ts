import { searchTypes } from './types'
import { SearchedMovie } from 'shared/models'
import { FilterValues } from 'shared/models'
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
    const url = `${api}${keyWord}`
    const res = await fetch(url)
    const results = await res.json()
    const moviesList: SearchedMovie[] = await results.results
    const films: SearchedMovie[] = moviesList.map((item) => ({
      ...item,
      poster_path: `https://image.tmdb.org/t/p/w185/${item.poster_path}`,
    }))
    dispatch({
      type: searchTypes.SUCCESS,
      payload: {
        films,
        url,
        totalPages: results.total_pages,
        currentPage: results.page,
        totalResult: results.total_results,
      },
    })
  } catch (err) {
    dispatch({
      type: searchTypes.ERROR,
      payload: err.message,
    })
  }
}

export const requestFilteredMovies = (filterValues: FilterValues) => async (
  dispatch: any
) => {
  try {
    dispatch(toggleLoading())
    const url = filterMovies(filterValues)
    const res = await fetch(url)
    const results = await res.json()
    const moviesList: SearchedMovie[] = await results.results
    const films: SearchedMovie[] = moviesList.map((item) => ({
      ...item,
      poster_path: `https://image.tmdb.org/t/p/w185/${item.poster_path}`,
    }))
    dispatch({
      type: searchTypes.SUCCESS,
      payload: {
        films,
        url,
        totalPages: results.total_pages,
        currentPage: results.page,
        totalResult: results.total_results,
      },
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
    const url = getTop
    const res = await fetch(url)
    const results = await res.json()
    const moviesList: SearchedMovie[] = await results.results
    const films: SearchedMovie[] = moviesList.map((item) => ({
      ...item,
      poster_path: `https://image.tmdb.org/t/p/w185/${item.poster_path}`,
    }))
    dispatch({
      type: searchTypes.SUCCESS,
      payload: {
        films,
        url,
        totalPages: results.total_pages,
        currentPage: results.page,
        totalResult: results.total_results,
      },
    })
  } catch (err) {
    dispatch({
      type: searchTypes.ERROR,
      payload: err.message,
    })
  }
}

export const requestNextPage = (
  baseUrl: string,
  page: string | null = '1'
) => async (dispatch: any) => {
  try {
    dispatch(toggleLoading())
    const url = `${baseUrl}&page=${page}`
    const res = await fetch(url)
    const results = await res.json()
    const moviesList: SearchedMovie[] = await results.results
    const films: SearchedMovie[] = moviesList.map((item) => ({
      ...item,
      poster_path: `https://image.tmdb.org/t/p/w185/${item.poster_path}`,
    }))
    dispatch({
      type: searchTypes.SUCCESS,
      payload: {
        films,
        url: baseUrl,
        totalPages: results.total_pages,
        currentPage: results.page,
        totalResult: results.total_results,
      },
    })
  } catch (err) {
    dispatch({
      type: searchTypes.ERROR,
      payload: err.message,
    })
  }
}
