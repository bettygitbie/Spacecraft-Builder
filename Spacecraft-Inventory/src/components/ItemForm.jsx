import React, { useState } from "react";

function ItemForm({ addItem }) {
  const initialState = {
    name: "",
    qty: "",
    purpose: "",
    chkBox: false,
  };
  const [item, setItem] = useState(initialState);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((item) => ({ ...item, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validateEntry();
    if (validate) {
      addItem(item);
      setItem(initialState);
      setError({})
    }
  };
  const validateEntry = () => {
    const requiredErr = {};
    if (!item.name) {
      requiredErr.name = true;
    }
    if (!item.qty) {
      requiredErr.qty = true;
    }
    if (!item.purpose) {
      requiredErr.purpose = true;
    }
    if (item.chkBox === false) {
      requiredErr.chkBox = true;
    }
    setError(requiredErr);
    return Object.keys(requiredErr).length === 0;
  };
  return (
    <div>
      <h3>Add an Item to Inventory</h3>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
        <span className="error">{error["name"] ? "** Name required" : ""}</span>

        <input
          id="qty"
          type="number"
          placeholder="Quantity"
          name="qty"
          value={item.qty}
          onChange={handleChange}
        />
        <span className="error">
          {error["qty"] ? "** Quantity required" : ""}
        </span>
        <textarea
          id="purpose"
          name="purpose"
          placeholder="Purpose"
          value={item.purpose}
          onChange={handleChange}
        ></textarea>
        <span className="error">
          {error["purpose"] ? "** Purpose required" : ""}
        </span>
        <span id="chkBox">
          <input
            id="check"
            type="checkbox"
            name="chkBox"
            value={item.chkBox}
            onChange={handleChange}
          />
          <label htmlFor="check"> Agree to Terms</label>{" "}
          <span className="error">
            {error["chkBox"] ? "** Please select checkbox" : ""}
          </span>
        </span>
        <button id="addBtn">Add</button>
      </form>
    </div>
  );
}

export default ItemForm;
