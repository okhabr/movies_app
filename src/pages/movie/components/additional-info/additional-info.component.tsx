import React, { useEffect, Fragment } from 'react';
import style from './additional-info.module.scss';

interface AdditionalInfo {
    Rate: number,
    Runtime: string,
    Popularity: string,
    Year: string,
    Countries: string,
    Budget: string,
    Revenue: string
}

interface AdditinalInfoProps {
    data: AdditionalInfo
}

export const AdditinalInfo: React.FC<AdditinalInfoProps> = (props) => {  
    const blocksArray = Object.entries(props.data);
    const blocksToShow = blocksArray.map(([title, content], index) => (
        <div key={index} className={style.info__container}>
            <h6 className={style.info__title}>{title}</h6>
            <p className={style.info__content}>{content}</p>
        </div>
    ));
    return (
        <section className={style.component__container}>
            {blocksToShow}
        </section>
    )
}