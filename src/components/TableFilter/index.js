import React from 'react'

const TableFilter = props => {
  const { placeHolder, filterText, handleChange } = props
  
  return (
    <p className="search-input" align="center">
      <input
        type="text"
        placeholder={placeHolder}
        value={filterText}
        onChange={handleChange}
      />
    </p>
  )
}

export default TableFilter
