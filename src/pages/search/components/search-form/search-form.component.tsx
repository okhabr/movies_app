import React, { useState } from 'react'
import { FilterValues } from 'shared/models'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  requestMovies,
  requestTopMovies,
  clearMovies,
  requestFilteredMovies,
} from 'store/search/actions'

import { GetTopTwenty } from './components/top-twenty/top-twenty.component'
import { FilterForm } from './components/filter/filter.component'
import { KeywordForm } from './components/keyword/keyword.component'

import style from './search-form.module.scss'

import { ROUTES } from 'shared/constants/routes'

export const SearchForm: React.FC = () => {
  const dispatch = useDispatch()
  let history = useHistory()

  const showFilterStarterValue = history.location.search.includes('filter')

  const [showFilter, setShowFilter] = useState<boolean>(showFilterStarterValue)

  const handleKeyWordSubmit = (word: string) => {
    dispatch(requestMovies(word))
    history.push(ROUTES.SEARCH.route('keyword', word))
  }

  const handleFilterSubmit = (filterData: FilterValues) => {
    dispatch(requestFilteredMovies(filterData))
    history.push(ROUTES.SEARCH.route('filter', '', filterData))
  }

  const handleGetTop = () => {
    dispatch(requestTopMovies())
    history.push(ROUTES.SEARCH.route('top'))
    setShowFilter(false)
  }

  const handleClear = () => {
    dispatch(clearMovies())
    history.push(ROUTES.SEARCH.route('keyword'))
  }

  const handleShowFilter = () => {
    setShowFilter(!showFilter)
    handleClear()
  }

  return (
    <div className={style.form__container}>
      <div className={style.flex__container}>
        {!showFilter && (
          <KeywordForm clear={handleClear} submit={handleKeyWordSubmit} />
        )}
        {showFilter ? (
          <FilterForm
            handleCancel={handleShowFilter}
            handleSubmit={handleFilterSubmit}
          />
        ) : (
          <button
            className={style.form__showFilters}
            onClick={handleShowFilter}
          >
            Use filter
          </button>
        )}
      </div>
      <GetTopTwenty handleClick={handleGetTop} />
    </div>
  )
}
