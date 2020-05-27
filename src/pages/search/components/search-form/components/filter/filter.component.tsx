import React from 'react'
import { Formik, Field, Form } from 'formik'
import {useLocation} from 'react-router-dom';

import style from './filter.module.scss'

import {genres} from 'shared/constants/genres';
import {FilterValues} from 'shared/models';

interface FilterFormProps {
  handleCancel: any;
  handleSubmit: any
}
export const FilterForm: React.FC<FilterFormProps> = (props) => {
  const location = useLocation();

  let starterValues:FilterValues;

  if(location.search.includes('filter')){
    const filterDataArray: string[] = location.search.split('&');
    starterValues = {
          year: Number.parseInt(filterDataArray[1].split('=')[1]),
          genres: filterDataArray[2].split('=')[1].split(','),
          excludeAdult:  !!filterDataArray[3].split('=')[1]
        }
  } else {
    starterValues = {genres:[], year: 0, excludeAdult: false}
  }
  const genreInputs = genres.map((genre) => <label 
    className={style.genre__label}
    key={genre.id}>
    {genre.name}
    <Field 
      name="genres" 
      type="checkbox" 
      value={genre.name} 
      className={style.genre__input}
      />
  </label>)

  const yearLabelStyle = (offset:number|null) =>({transform: `translateX(${offset}px)`}) 

  return (
      <Formik
        initialValues={starterValues}

        onSubmit={(data:FilterValues, {resetForm }) => {
          props.handleSubmit(data)
        }}        
      >
        {({values}) => (
          <Form>
            <div className={style.set__container}>
            <h3 className={style.set__header}>Genres</h3>

            <div className={style.genre__selected_container}>
              {(values.genres.map((genre,index) => <div 
              className={style.genre__selected_item}
              key={index}>
                <div className={style.genre__selected_name}>{genre}</div>
                <label className={style.genre__selected_delete}>  
                  <span className="material-icons">clear</span>
                    <Field 
                    name="genres" 
                    type="checkbox" 
                    value={genre} 
                    className={style.genre__input}/>
                </label>  
              </div>))}
            </div>

            </div>
            
            {genreInputs}
            
            <div className={style.set__container}>
              <h3 className={style.set__header}>Year</h3>
              <p className={style.year__value} style={yearLabelStyle((values.year-1990)*10)}>{values.year}</p>
                <Field 
                  name="year" 
                  type="range"
                  min="1990" 
                  max="2020"
                  className={style.year__input}
                  />
            </div>

            <div className={style.set__container}>
              <h3 className={style.set__header}>Include adult</h3>
                <Field 
                  name="excludeAdult" 
                  type="checkbox"
                  className={style.adult__input}
                  />
            </div>

            <button type="submit" className={style.button_submit}>
              Search
            </button>
            <button type="button" className={style.button_cancel} onClick={props.handleCancel}>
              Cancel
            </button>
          </Form>
        )}
      </Formik>
  )
}
