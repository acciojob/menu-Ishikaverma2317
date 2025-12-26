import React from "react";

function Menu({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
