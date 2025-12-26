import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

const items = [
  { id: 1, name: "Pancakes", category: "Breakfast" },
  { id: 2, name: "Burger", category: "Lunch" },
  { id: 3, name: "Shake", category: "Shakes" }
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
