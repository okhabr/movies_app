import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { requestMovies } from 'store/search/actions'
import style from './search-form.module.scss'

import { ROUTES } from 'shared/constants/routes'
import img from 'assets/Search.jpg'

export const SearchForm: React.FC = () => {
  const dispatch = useDispatch()
  let history = useHistory()

  const [value, setValue] = useState<string>('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(requestMovies(value))
    history.push(ROUTES.SEARCH.route(value))
  }

  useEffect(() => {
    const searchedMovie: string = history.location.pathname.split('/')[2]
    dispatch(requestMovies(searchedMovie))
    setValue(searchedMovie)
  }, [dispatch, history.location.pathname])

  return (
    <div className={style.form__container}>
      <div className={style.flex__container}>
        <form onSubmit={handleSubmit}>
          <label className={style.form__name}>Type your movie name here</label>
          <input
            className={style.form__input}
            type="text"
            onChange={handleInput}
            value={value}
          />
          <button className={style.form__submit} type="submit">
            Search
          </button>
        </form>
        <button className={style.form__showFilters}>Use filters</button>
      </div>
      <div className={style.flex__container}>
        <img className={style.form__pic} src={img} />
        <button className={style.form__getTop}>Get top 20</button>
      </div>
    </div>
  )
}
