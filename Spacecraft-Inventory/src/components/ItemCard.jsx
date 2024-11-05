import React from 'react'

function ItemCard({name,qty,purpose}) {
  return (
    <div>
        <h3>{name}</h3>
        <p>Quantity: {qty}</p>
        <p>Purpose: {purpose}</p>
    </div>
  )
}

export default ItemCard