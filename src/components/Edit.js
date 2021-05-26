import React from 'react'

const Add = ({handleEdit}) => {
  return (
    <button
      type="button" onClick={handleEdit}>
      Editar
    </button>
  )
}

export default Add
