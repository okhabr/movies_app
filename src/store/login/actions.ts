import {loginTypes} from './types'

export const setUser = (userObject:any) => {
  return {
    type: loginTypes.SET,
    payload: userObject
  }
}

export const clearUser = () => {
  return {
    type: loginTypes.CLEAR,
  }
}
