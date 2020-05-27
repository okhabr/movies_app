import React, { useState } from 'react'
import style from './keyword.module.scss'

import { useLocation } from 'react-router-dom'

interface KeywordFormProps {
  clear: any;
  submit: any;
}
export const KeywordForm: React.FC<KeywordFormProps> = (props) => {
  const { clear, submit } = props
  const location = useLocation()

  const starterKeyWord = location.search.includes('keyword')
    ? location.search.split('=')[1]
    : ''
  const [keyword, setKeyword] = useState<string>(starterKeyWord)

  const handleClear = () => {
    setKeyword('')
    clear()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(keyword)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className={style.form__name}>Type your movie name here</label>
      {keyword && (
        <button
          type="button"
          className={style.form__clear}
          onClick={handleClear}
        >
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
  )
}
