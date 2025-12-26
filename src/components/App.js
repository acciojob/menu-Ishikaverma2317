import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/styles.css";   // correct path

const items = [
  { id: 1, name: "Pancakes", category: "Breakfast", price: 120 },
  { id: 2, name: "Omelette", category: "Breakfast", price: 100 },
  { id: 3, name: "Burger", category: "Lunch", price: 180 },
  { id: 4, name: "Pizza", category: "Lunch", price: 250 },
  { id: 5, name: "Chocolate Shake", category: "Shakes", price: 150 },
  { id: 6, name: "Strawberry Shake", category: "Shakes", price: 160 }
];

function App() {
  const [category, setCategory] = useState("Shakes");

  const filteredItems = items.filter(
    (item) => item.category === category
  );

  return (
    <div id="main">
      <button id="filter-btn-1" onClick={() => setCategory("Breakfast")}>
        Breakfast
      </button>

      <button id="filter-btn-2" onClick={() => setCategory("Lunch")}>
        Lunch
      </button>

      <button id="filter-btn-3" onClick={() => setCategory("Shakes")}>
        Shakes
      </button>

      <Menu items={filteredItems} />
    </div>
  );
}

export default App;
