import { useState } from "react";
export default function Form({ items, setItems, quantitySelection }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    function handleAddItems(newItem) {
      setItems([...items, newItem]);
    }

    const newItem = { id: Date.now(), description, quantity, packed: false };
    setDescription("");
    setQuantity(1);
    handleAddItems(newItem);
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your trip 💼 ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {quantitySelection.map((selection) => (
          <option key={selection} value={selection}>
            {selection}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
