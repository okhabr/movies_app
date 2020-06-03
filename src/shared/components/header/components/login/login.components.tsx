import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FacebookLogin from 'react-facebook-login'
import { RootStore } from 'store/store.models'
import style from './login.module.scss'

import {setUser} from 'store/login/actions';

export const Login: React.FC = () => {
  const dispatch = useDispatch()
  const loginData = useSelector( (state: RootStore) => state.login)

  const responseFacebook = (response:any) => {
    dispatch(setUser(response))
  }

  if(loginData.loggedIn) {
    return(
        <div className={style.user__container}>
          <img src={loginData.picture.data.url} className={style.user__pic}/>
          <p className={style.user__name}>{loginData.name?.split(' ')[0]}</p>
        </div>
    )
  }
  return (
    <FacebookLogin
          appId="692582117953632"
          autoLoad={false}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
          cssClass={style.login}
    />
  )
}
