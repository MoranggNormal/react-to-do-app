import React from 'react'

const Add = ({handleDelete}) => {
  return (
    <button
    type="button"
    onClick={handleDelete}>
    Excluir
  </button>
  )
}

export default Add
