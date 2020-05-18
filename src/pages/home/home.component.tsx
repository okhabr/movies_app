import React, { useState, useEffect } from 'react'
import style from './home.module.scss'
import { Progress } from './components/progress/progress.component'
import img1 from 'assets/Landing1.png'
import img2 from 'assets/Landing2.png'
import img3 from 'assets/Landing3.png'

export const Home: React.FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const images = [img1, img2, img3]
  const descriptions = [
    'Best movies to watch with friends & much more....',
    'Perfect movie for a romantic date',
    'Good movies to enjoy it on your own',
  ]

  const handleProgressClick = (event: React.MouseEvent) => {
    const elementId = event.currentTarget.id
    setCurrent(Number.parseInt(elementId))
  }

  const handleClick = () => {
    const next = current === 2 ? 0 : current + 1
    setCurrent(next)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) => {
        if (current === 1) {
          clearInterval(timer)
        }
        return current + 1
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={style.home}>
      <h1 className={style.home__header}>MOVIE LOVERS</h1>
      <div className={current === 0 ? style.visible : style.invisible}>
        <p className={style.home__description}>{descriptions[0]}</p>
        {/* <LinkToSearch/> */}
        <img
          src={images[0]}
          className={style.home__pic}
          onClick={handleClick}
        />
      </div>
      <div className={current === 1 ? style.visible : style.invisible}>
        <p className={style.home__description}>{descriptions[1]}</p>
        {/* <LinkToSearch/> */}
        <img
          src={images[1]}
          className={style.home__pic}
          onClick={handleClick}
        />
      </div>
      <div className={current === 2 ? style.visible : style.invisible}>
        <p className={style.home__description}>{descriptions[2]}</p>
        {/* <LinkToSearch/> */}
        <img
          src={images[2]}
          className={style.home__pic}
          onClick={handleClick}
        />
      </div>
      <div className={style.home__progress}>
        <Progress current={current} handleClick={handleProgressClick} />
      </div>
    </div>
  )
}
