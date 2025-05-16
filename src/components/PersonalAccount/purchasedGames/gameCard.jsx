import { useContext } from "react";
import "./gameCard.css";
import { Link } from "react-router-dom";
import { getTimeDisplay } from "./getTimeDisplay";
import { CartContext } from "./CartContext";

export default function GameCard({ game, viewMode }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({
      ...game,
      quantity: 1,
    });
  };

  return (
    <Link
      to={`/game/${game.id}`}
      className={`game-card ${viewMode}`}
      style={{ textDecoration: "none" }}
    >
      <div className="game-image">
        <img src={game.media.mainImage} alt={game.title} loading="lazy" />
      </div>
      <div className="game-info">
        <h3>{game.title}</h3>

        <div className="game-specs-row">
          <div className="spec-item">
            <span className="spec-label">Возраст</span>
            <span className="spec-value">{game.specs.age.min}+</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Время</span>
            <span className="spec-value">{getTimeDisplay(game)}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Игроки</span>
            <span className="spec-value">
              {game.specs.players.min}-{game.specs.players.max}
            </span>
          </div>
        </div>

        <p className="short-description">{game.description.short}</p>

        <div className="game-footer">
          <div className="price">{game.specs.price}₽</div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            В корзину
          </button>
        </div>
      </div>
    </Link>
  );
}
