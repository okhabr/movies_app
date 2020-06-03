import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchReducer } from 'store/search/models'
import { RootStore } from 'store/store.models'
import { requestNextPage } from 'store/search/actions'
import style from './pagination.module.scss'

import { PageItem } from './components/page-item/page-item.component'

export const Pagination: React.FC = () => {
  const dispatch = useDispatch()

  const moviesState: SearchReducer = useSelector(
    (state: RootStore) => state.search
  )
  const totalPagesCount = moviesState.totalPages
  const currentPage = moviesState.currentPage
  const baseUrl = moviesState.url

  const maxLimit = totalPagesCount > 5 ? 5 : totalPagesCount

  const [currentSet, setCurrentSet] = useState<Array<number>>([])

  useEffect(() => {
    const starterArray = Array.from({ length: maxLimit }, (e, i) => i + 1)
    setCurrentSet(starterArray)
  }, [maxLimit, totalPagesCount])

  const handleSetChange = (e: React.MouseEvent<HTMLElement>) => {
    const type = e.currentTarget.getAttribute('data-type')
    if (currentSet[0] === 1 && type === 'previous') return
    if (currentSet[currentSet.length - 1] >= totalPagesCount && type === 'next')
      return
    const offset = type === 'next' ? 5 : -5
    const nextSet = currentSet
      .map((current) => current + offset)
      .filter((item) => item < totalPagesCount)
    setCurrentSet(nextSet)
  }

  const handlePageChange = (id: string) => {
    dispatch(requestNextPage(baseUrl, id))
  }

  const pageItems = currentSet.map((item) => (
    <PageItem
      currentNumber={item}
      activeNumber={currentPage}
      handlePageChange={handlePageChange}
      key={item}
    />
  ))

  return (
    <div className={style.pagination__container}>
      <button
        data-type="previous"
        className={style.pagination__controller}
        onClick={handleSetChange}
      >
        <span className="material-icons">arrow_back_ios</span>
      </button>
      <ul className={style.pagination__pages}>{pageItems}</ul>
      <button
        data-type="next"
        className={style.pagination__controller}
        onClick={handleSetChange}
      >
        <span className="material-icons">arrow_forward_ios</span>
      </button>
    </div>
  )
}
