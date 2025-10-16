import { useState } from "react";
import Item from "./Item";

export default function PackingList(props) {
  function handleClearList() {
    const confirmed = window.confirm("Are You Sure You Want to Clear List ?");
    if (confirmed) {
      props.setItems([]);
    }
  }
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = props.items;
  }
  if (sortBy === "description") {
    sortedItems = [...props.items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }
  if (sortBy === "packed") {
    sortedItems = [...props.items].sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={props.handleDeleteItem}
            handleToggleItem={props.handleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed">Sort by packing status</option>
        </select>
        <button onClick={() => handleClearList()}>Clear List</button>
      </div>
    </div>
  );
}
