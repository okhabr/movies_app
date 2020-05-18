import React, { Fragment } from 'react'
import style from './loader.module.scss'

export const Loader: React.FC = () => {
  return (
    <Fragment>
      <div className={style.container}>
        <div className={style.elipsis}>
          <div className={style.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
