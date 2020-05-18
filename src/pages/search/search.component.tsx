import React, { useEffect, Fragment } from 'react'
import { SearchInput } from 'shared/components/search-input/search-input.component'
import { MovieCards } from './components/movie-cards/movie-cards.component'
import { SearchForm } from './components/search-form/search-form.component'

export const Search: React.FC = () => {
  return (
    <Fragment>
      <SearchForm />
      <MovieCards />
    </Fragment>
  )
}
