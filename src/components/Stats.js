export default function Stats(props) {
  const numItems = props.items.length;
  const packedItems = props.items.filter((item) => item.packed === true).length;
  const progress = Math.floor((packedItems / numItems) * 100);
  return (
    <>
      {numItems === 0 ? (
        <footer className="stats">
          <p>
            <em>Start adding some items ... 🚀</em>
          </p>
        </footer>
      ) : (
        <footer className="stats">
          <em>
            {progress === 100
              ? "Everything is OK, We are ready to fly ✈️"
              : `You have ${numItems} items to prepare 📄. You already packed
            ${packedItems} items 💼 with Progress ${progress}%`}
          </em>
        </footer>
      )}
    </>
  );
}
