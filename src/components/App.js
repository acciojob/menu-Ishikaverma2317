import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

const menuItems = [
  {
    id: 1,
    name: "Pancakes",
    category: "Breakfast",
    price: "$5",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Omelette",
    category: "Breakfast",
    price: "$4",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Burger",
    category: "Lunch",
    price: "$8",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Salad",
    category: "Lunch",
    price: "$6",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Chocolate Shake",
    category: "Shakes",
    price: "$3",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Vanilla Shake",
    category: "Shakes",
    price: "$3",
    image: "https://via.placeholder.com/100",
  },
];

export default App;
