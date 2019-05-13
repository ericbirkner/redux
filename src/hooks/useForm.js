import React, { useState } from 'react'

const useForm = (callback, initialValues = {}) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    callback()    
  }

  return {
    values,
    handleChange,
    handleSubmit
  }
}

export default useForm
