import { SearchReducer } from './models'
import { searchTypes } from './types'

const initialState: SearchReducer = {
  films: [],
  loading: false,
  error: '',
}
export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case searchTypes.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case searchTypes.SUCCESS:
      return {
        ...state,
        films: action.payload,
        loading: false,
      }
    case searchTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
