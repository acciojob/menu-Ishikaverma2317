import React from "react";

function Menu({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Menu;
