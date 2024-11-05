import React from 'react'

function ItemAction({id,deleteItem}) {
  return (
    <div>
        <button className="deleteBtn" onClick={()=> deleteItem(id)}>Delete</button>
    </div>
  )
}

export default ItemAction