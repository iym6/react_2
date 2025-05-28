import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { CartContext } from '../Cart/context/CartContext';
import { useFavorites } from '../Favourites/context/FavouritesContext';
import { games } from './GamesData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GameDetails.css';
import '../Slider/Slider.css';

const GameDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const game = games.find(game => game.id === id);

  const handleFavoriteClick = () => {
    isFavorite(game.id) ? removeFromFavorites(game.id) : addToFavorites(game);
  };

  if (!game) {
    return (
      <div className="not-found-container">
        <h2>Игра не найдена</h2>
        <Link to="/" className="back-button">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="game-details">
      <h1>{game.title}</h1>
      <div className="game-info-game-details">
        <div className="game-description">  
          <p>{game.description.full}</p>
          <div className="game-stats">
            <img src={game.specs.age.image} alt="Возраст" />
            <img src={game.specs.time.image} alt="Время игры" />
            <img src={game.specs.players.image} alt="Количество игроков" />
          </div>
          <div className="game-price-container">
            <div className="game-price">{game.specs.price}₽</div>
            <div className="game-actions">
                <button 
                className={`favorite-button ${isFavorite(game.id) ? 'active' : ''}`}
                onClick={handleFavoriteClick}
                aria-label={isFavorite(game.id) ? "Удалить из избранного" : "Добавить в избранное"}
                >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
              <button 
                className="add-to-cart" 
                onClick={() => addToCart({
                  ...game,
                  quantity: 1
                })}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div className="game-slider">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination
            loop={true}
          >
            {game.media.gallery.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="slide-image-container">
                  <img src={image} alt={`${game.title} ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Link to="/" className="back-button">
        Назад к каталогу
      </Link>
    </div>
  );
};

export default GameDetails;