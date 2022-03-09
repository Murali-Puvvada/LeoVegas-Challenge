import React, { useState } from "react";
import games from "./data";

function Categories() {
  const menuItems = [
    "table games",
    "slots",
    "jackpots",
    "favourites",
    "instant win",
    "Daily Jackpots",
    "top games",
    "newest",
    "exciting games"
  ];

  const [buttonItem, setbuttonItem] = useState();

  function handleClick(event) {
    const newValue = event.target.value;
    setbuttonItem(newValue);
  }

  var categoryNames = [];
  games.map((categoryItem, index) => {
    return categoryNames.push(categoryItem.categories);
  });
  // console.log(categoryNames);

  var newCategory = [];
  games.forEach(function (item) {
    const flag = item.categories.includes(buttonItem);
    if (flag === true) {
      newCategory.push(item);
    }
  });

  console.log(newCategory);

  return (
    <div>
      <h1>Hello</h1>
      {menuItems.map((item) => (
        <button value={item} onClick={handleClick}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Categories;
