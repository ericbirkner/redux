import React from 'react'
import useForm from '../../hooks/useForm'

const HeroForm = ({ heroSubmit }) => {
  const heroObject = {
    name: '',
    race: '',
    age: '',
    weapon: ''
  }

  const {
    values,
    handleChange,
    handleSubmit
  } = useForm(() => heroSubmit(values), heroObject)

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' value={values.name} onChange={handleChange} placeHolder="name"/>
      <input type="text" name='race' value={values.race} onChange={handleChange} placeHolder="race"/>
      <input type="text" name='age' value={values.age} onChange={handleChange} placeHolder="age"/>
      <input type="text" name='weapon' value={values.weapon} onChange={handleChange} placeHolder="weapon"/>
      <button type='submit'>Guardar Heroe</button>
    </form>
  )
}

export default HeroForm
