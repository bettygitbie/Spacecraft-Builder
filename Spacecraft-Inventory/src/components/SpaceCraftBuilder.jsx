import React, { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";
import { v4 as uuid } from "uuid";

function SpaceCraftBuilder() {
  const initialState = [];
  const [items, setItems] = useState(initialState);

  const addItem = ({ name, qty, purpose }) => {
    const newItem = {
      name,
      qty,
      purpose,
      id: uuid(),
    };
    setItems(items=>([...items, newItem]));
  };
  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h2>Spacecraft Builder</h2>
      <ItemForm addItem={addItem} />
      <InventoryDisplay items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default SpaceCraftBuilder;
