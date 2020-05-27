import { SearchReducer } from './models'
import { searchTypes } from './types'
import { act } from '@testing-library/react'

const initialState: SearchReducer = {
  films: [],
  loading: false,
  error: '',
  currentPage: 0,
  totalPages: 0,
  totalResult: null
}
export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case searchTypes.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case searchTypes.SUCCESS:
     const {films, currentPage, totalPages, totalResult } = action.payload;
      return {
        ...state,
        loading: false,
        films, 
        currentPage, 
        totalPages, 
        totalResult
      }
    case searchTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case searchTypes.CLEAR:
      return {
        ...state,
        films: [],
      }
    default:
      return state
  }
}
