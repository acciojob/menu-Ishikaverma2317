import React from "react";

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          data-test-id={`menu-item-${item.category}`}
        >
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Menu;

