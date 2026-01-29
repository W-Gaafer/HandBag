import { useState } from "react";

export default function Form({ items, setItems, quantitySelection }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedDescription = description.trim();

    // ✅ Validation
    if (trimmedDescription.length < 3) {
      setError("Item name must be at least 3 letters");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(trimmedDescription)) {
      setError("Item name must contain letters only");
      return;
    }

    // ✅ Get current items from localStorage
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];

    // ✅ Check if item already exists
    const isAlreadyAdded = storedItems.some(
      (item) =>
        item.description.toLowerCase() === trimmedDescription.toLowerCase()
    );

    if (isAlreadyAdded) {
      setError("This item is already added");
      return;
    }

    // ✅ Create new item
    const newItem = {
      id: Date.now(),
      description: trimmedDescription,
      quantity,
      packed: false,
    };

    const updatedItems = [...storedItems, newItem];

    // ✅ Save to localStorage
    localStorage.setItem("items", JSON.stringify(updatedItems));

    setItems(updatedItems);
    setDescription("");
    setQuantity(1);
    setError("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 💼 ?</h3>

      <input
        type="text"
        placeholder="Item name ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

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

      <button>Add</button>

      {error && <p style={{ color: "white" }}>{error}</p>}
    </form>
  );
}
