export default function Item(props) {
  return (
    <li>
      <input
        type="checkbox"
        value={props.item.packed}
        onChange={() => props.handleToggleItem(props.item.id)}
      ></input>
      <span style={{ textDecoration: props.item.packed && "line-through" }}>
        {props.item.quantity} {props.item.description}
      </span>
      <button onClick={() => props.handleDeleteItem(props.item.id)}>❌</button>
    </li>
  );
}
