import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import style from './search-input.module.scss'

import { ROUTES } from 'shared/constants/routes'

export const SearchInput: React.FC = () => {
  let history = useHistory()

  const [value, setValue] = useState<string>('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
    
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    history.push(ROUTES.SEARCH.route('keyword',value))
  }

  return (
    <form onSubmit={handleSubmit}>
      <span className={style.search__glass}>
        <span className="material-icons">search</span>
        <input
          className={style.search__input}
          type="text"
          onChange={handleInput}
          value={value}
        />
      </span>
    </form>
  )
}
