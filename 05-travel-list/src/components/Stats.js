export default function Stats({ items }) {
  if (!items.length)
    // this is early rendering in case there are no elements in the array of items yet
    return (
      <p className="stats">
        <em>Start adding some items to your packing list.</em>
      </p>
    );

  const numItems = 0 ? 0 : items.length; // this is a derived state
  const numPacked = items.filter((item) => item.packed).length; // this only gets the number of packed items
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You go everything!! Ready to go!"
          : `   You have ${numItems} items on your list, you already packed ${numPacked} (
        ${percentage}%)`}
      </em>
    </footer>
  );
}
