import React from 'react'
import style from './progress.module.scss'

interface ProgressProps {
  current: number;
  handleClick: any;
}

export const Progress: React.FC<ProgressProps> = (props) => {
  const result = []
  for (let i = 0; i < 3; i++) {
    const styles = i === props.current ? style.dot_active : style.dot_passive
    result.push(
      <span
        className={styles}
        key={i}
        id={`${i}`}
        onClick={props.handleClick}
      ></span>
    )
  }
  return <>{result}</>
}
