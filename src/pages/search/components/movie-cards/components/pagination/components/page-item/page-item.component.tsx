import React from 'react'
import style from './page-item.module.scss'

interface PageItemProps {
  currentNumber: number;
  activeNumber: number;
  handlePageChange: any
}

export const PageItem: React.FC<PageItemProps> = (props) => {
  const {currentNumber , activeNumber, handlePageChange } = props;
  const itemStyle = currentNumber === activeNumber ? style.item_active : style.item_passive;

  const handleClick = () => handlePageChange(`${currentNumber}`);
  return (
    <li className={itemStyle} onClick={handleClick}>{currentNumber}</li>
    )
     
}
