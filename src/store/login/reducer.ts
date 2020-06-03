import { Login } from './models'
import { loginTypes } from './types'

const initialState: Login = {
  loggedIn: false,
  name: null,
  picture: { data: {
    url:''
  }},
  accessToken: null
}
export const LoginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case loginTypes.SET:
      return {
        loggedIn: true,
        ...action.payload
      }
    case loginTypes.CLEAR:
      return {...initialState}
    default:
      return state
  }
}
