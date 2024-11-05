import React from "react";
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

function InventoryDisplay({ items, deleteItem }) {
  return (
    <div>
      <h3>Inventory</h3>
      {items.map(({ id, name, qty, purpose }) => (
          <div className="ItemCard" key={id}>
            <ItemCard name={name} qty={qty} purpose={purpose} />
            <ItemAction id={id} deleteItem={deleteItem} />
          </div>
        )
      )}
    </div>
  );
}

export default InventoryDisplay;
