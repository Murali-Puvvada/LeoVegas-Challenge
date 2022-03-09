import React, { useState } from "react";
import ReactDOM from "react-dom";
import games from "./data";
import Card from "./Card";
import { Box, Grid } from "@mui/material";
// import Categories from "./Category";

function App() {
  const [searchInput, setsearchInput] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setsearchInput(newValue);
  }

  var flag = false;
  var newGames = [];
  if (flag === false) {
    newGames = games;
  } else {
    newGames = [];
  }

  if (searchInput.length > 0) {
    flag = true;
    newGames = games.filter((game) => {
      var searchOutput = game.gameName.match(new RegExp(searchInput, "i"));
      return searchOutput;
    });
  }

  // console.log(newGames);

  const menuItems = [
    "top games",
    "newest",
    "Daily Jackpots",
    "instant win",
    "favourites",
    "exciting games",
    "table games",
    "slots",
    "jackpots"
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

  var buffer = null;
  var newCategory = [];
  games.forEach(function (item) {
    const buttonValue = item.categories.includes(buttonItem);
    if (buttonValue === true) {
      buffer = true;
      newCategory.push(item);
    }
  });

  if (menuItems.includes(buttonItem) && searchInput.length > 0) {
    newCategory = newCategory.filter((game) => {
      var sear = game.gameName.match(new RegExp(searchInput, "i"));
      return sear;
    });
  }

  console.log(newCategory);

  var mapValue = null;
  if (buffer === true) {
    mapValue = newCategory;
  } else {
    mapValue = newGames;
  }

  // console.log(mapValue);

  return (
    <div>
      <h1 className="heading">Leo Vegas</h1>
      <div className="search">
        <input
          className="searchTerm"
          type="search"
          placeholder="Search for Games"
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
        <button type="submit" className="searchButton">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
      {/* <Categories /> */}
      {menuItems.map((item) => (
        <button
          type="button"
          class="btn btn-outline-dark"
          value={item}
          onClick={handleClick}
        >
          {item.toUpperCase()}
        </button>
      ))}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {mapValue.map((gameItem, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card
                id={index}
                key={index}
                gameThumbnail={gameItem.gameThumbnail}
                gameName={gameItem.gameName}
                gamePreviewUrl={gameItem.gamePreviewUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {(buffer = false)}
      {/* {mapValue.map((gameItem, index) => (
        <Card
          id={index}
          key={index}
          gameThumbnail={gameItem.gameThumbnail}
          gameName={gameItem.gameName}
          gamePreviewUrl={gameItem.gamePreviewUrl}
        />
      ))}
      ; */}
    </div>
  );
}

export default App;
