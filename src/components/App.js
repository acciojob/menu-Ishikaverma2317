import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const items = [
  { id: 1, name: "Pancakes", category: "Breakfast", price: 120 },
  { id: 2, name: "Burger", category: "Lunch", price: 200 },
  { id: 3, name: "Oreo Shake", category: "Shakes", price: 150 },
];

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    const filtered = items.filter(
      (item) => item.category === category
    );
    setMenuItems(filtered);
  };

  return (
    <div id="main">
      <button id="filter-btn-1" onClick={() => filterItems("Breakfast")}>
        Breakfast
      </button>

      <button id="filter-btn-2" onClick={() => filterItems("Lunch")}>
        Lunch
      </button>

      <button id="filter-btn-3" onClick={() => filterItems("Shakes")}>
        Shakes
      </button>

      <Menu items={menuItems} />
    </div>
  );
}

export default App;
