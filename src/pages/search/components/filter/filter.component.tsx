import React, { useState, useEffect } from 'react'
import {Formik, Field, Form, useField, FieldInputProps} from 'formik';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import style from './filter.module.scss'

import img from 'assets/Search.jpg'

interface MyRadioProps extends FieldInputProps<""> {
  label?: string;
}

const MyTextInput: React.FC<MyRadioProps> = ({...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched;
  
  return (
      <div>
          <input type="text" {...field} {...props} />
          <p>{errorText}</p>
      </div>
  );
};

export const FilterForm: React.FC = () => {
  return (  
    <div className={style.form__container}>
      <h3 className={style.form__name}>Advanced filters</h3>
      <Formik 
      initialValues={{
        firstName: 'bob', 
        lastName: "doe", 
        isTall: false,
        cookies: [],
        yogurt: ''
      }}
      validate={(values) => {
        const errors: Record<string, string> = {};

        if(values.firstName.includes('oksi')) {
          errors.firstName = 'no oksi!';  
        }

        return errors;
      }}
      onSubmit={(data, {setSubmitting, resetForm}) => {
        //disables submit button
        setSubmitting(true);
        //async call
        console.log(data);
        setSubmitting(false);
      }}> 
      { ({values, errors, isSubmitting, handleChange, handleSubmit, handleBlur}) => (
        <Form>
          <Field name="firstName" type="input"/>
          <Field name="lastName" type="input"/>
          <Field name="isTall" type="checkbox"/>
          <Field name="cookies" type="checkbox" value='Oreo'/>
          <Field name="cookies" type="checkbox" value='Nuts'/>

          <Field name="yogurt" type="radio" value='Banana'/>
          <Field name="yogurt" type="radio" value='Cherry'/>
          <Field name="yogurt" type="radio" value='Peach'/>
          <pre>{JSON.stringify(values)}</pre>
          <pre>{JSON.stringify(errors)}</pre>
          <button disabled={isSubmitting} type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}
