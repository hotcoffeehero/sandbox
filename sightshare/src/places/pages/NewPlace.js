import React, { useCallback } from 'react'
import './NewPlace.css'
import Input from '../../shared/components/FormElements/Input'
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators'

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, [])
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, [])

  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='please enter a valid title'
        onInput={titleInputHandler}
      />
      <Input
        title='description'
        element='input'
        type='text'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(20)]}
        errorText='please enter a valid description'
        onInput={descriptionInputHandler}
      />
    </form>
  )
}

export default NewPlace
