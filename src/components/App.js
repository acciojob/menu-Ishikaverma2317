import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

const App = () => {
  const menuData = [
    {
      id: 1,
      name: "Pancakes",
      category: "breakfast",
      price: "$5",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Burger",
      category: "lunch",
      price: "$10",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Milk Shake",
      category: "shakes",
      price: "$7",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [items, setItems] = useState(menuData);

  const filterItems = (category) => {
    setItems(menuData.filter((item) => item.category === category));
  };

  return (
    <div id="main">
      <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button>

      <button id="filter-btn-2" onClick={() => filterItems("lunch")}>
        Lunch
      </button>

      <button id="filter-btn-3" onClick={() => filterItems("shakes")}>
        Shakes
      </button>

      <Menu items={items} />
    </div>
  );
};

export default App;
