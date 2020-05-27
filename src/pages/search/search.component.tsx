import React from 'react'
import { MovieCards } from './components/movie-cards/movie-cards.component'
import { SearchForm } from './components/search-form/search-form.component'

export const Search: React.FC = () => {
  return (
    <>
      <SearchForm />
      <MovieCards />
    </>
  )
}
