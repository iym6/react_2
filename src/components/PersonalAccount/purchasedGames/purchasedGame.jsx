import "./purchasedGames.css";
import { useState } from "react";
import { games } from "../../GameDetails/GamesData";
import GameCard from "../../GameCard/GameCard";

export default function PurchasedGames() {
  const [sortValue, setSortValue] = useState("default");

  const listGames = [...games].sort((a, b) => {
    switch (sortValue) {
      case "price-asc":
        return a.specs.price - b.specs.price;
      case "price-desc":
        return b.specs.price - a.specs.price;

      default:
        return 0;
    }
  });

  return (
    <>
      <div className="sort">
        <select
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          {/* <option value={"new"}>Сначала новые</option>
        <option value={"old"}>Сначала старые</option> */}
          <option value={"price-asc"}>Сначала дешевые</option>
          <option value={"price-desc"}>Сначала дорогие</option>
        </select>
      </div>
      <div className="purchased_main-container">
        <div className="purchased_games-grid">
          {listGames.length > 0 ? (
            listGames.map((game) => <GameCard game={game} />)
          ) : (
            <div className="no-results">
              <p>Похоже вы еще ничего не купили</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
