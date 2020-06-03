import { SearchReducer } from './models'
import { searchTypes } from './types'

const initialState: SearchReducer = {
  films: [],
  loading: false,
  error: '',
  currentPage: 0,
  totalPages: 0,
  totalResult: null,
  url: '',
}
export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case searchTypes.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case searchTypes.SUCCESS:
      const {
        films,
        currentPage,
        totalPages,
        totalResult,
        url,
      } = action.payload
      return {
        ...state,
        loading: false,
        films,
        currentPage,
        totalPages,
        totalResult,
        url,
      }
    case searchTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case searchTypes.CLEAR:
      return initialState
    default:
      return state
  }
}
