import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  requestMovies,
  requestTopMovies,
  clearMovies,
} from 'store/search/actions'
import { GetTopTwenty } from '../top-twenty/top-twenty.component'
import {FilterForm} from '../filter/filter.component';
import style from './search-form.module.scss'

import { ROUTES } from 'shared/constants/routes'
import img from 'assets/Search.jpg'

export const SearchForm: React.FC = () => {
  const dispatch = useDispatch()
  let history = useHistory()

  const [keyword, setKeyword] = useState<string>('')
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Use filter');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(requestMovies(keyword))
    history.push(ROUTES.SEARCH.route('keyword', keyword))
  }

  const handleGetTop = () => {
    dispatch(requestTopMovies())
    history.push(ROUTES.SEARCH.route('top'))
  }

  const handleClear = () => {
    setKeyword('')
    dispatch(clearMovies())
    history.push(ROUTES.SEARCH.route('keyword'))
  }

  const handleShowFilter = () => {
    const text = showFilter ? 'Use filter' : 'Hide filter';
    setButtonText(text);
    setShowFilter(!showFilter);
  }

  useEffect(() => {
    const searchType: string = history.location.pathname
      .split('/')[2]
      .split('-')[0]
    switch (searchType) {
      case 'top':
        dispatch(requestTopMovies())
        setKeyword('')
        break
      case 'keyword':
        const searchedMovie: string = history.location.pathname.split('-')[1]
        dispatch(requestMovies(searchedMovie))
        setKeyword(searchedMovie)
        break
    }
  }, [dispatch, history.location.pathname])

  return (
    <div className={style.form__container}>
      <div className={style.flex__container}>
        {!showFilter && (
          <form onSubmit={handleSubmit}>
          <label className={style.form__name}>Type your movie name here</label>
          {keyword && (
            <button className={style.form__clear} onClick={handleClear}>
              <span className="material-icons">clear</span>
            </button>
          )}
          <input
            className={style.form__input}
            type="text"
            onChange={handleInput}
            value={keyword}
          />
          <button className={style.form__submit} type="submit">
            Search
          </button>
        </form>
        )}
        
          <button className={style.form__showFilters} onClick={handleShowFilter}>{buttonText}</button>
          {showFilter &&  <FilterForm/>}
      </div>
      <div className={style.flex__container}>
        <img className={style.form__pic} src={img} />
        <GetTopTwenty handleClick={handleGetTop} />
      </div>
    </div>
  )
}
