import React, { useState } from 'react';
import Slider from '../Slider/slider';
import './Catalog.css';
import { games } from '../GameDetails/GamesData';
import Filters, { filterGames, getTimeDisplay } from '../Filters/Filters';
import GameCard from '../GameCard/GameCard'; // Импортируем GameCard из отдельного файла

const Catalog = () => {
  const [filters, setFilters] = useState({
    price: [0, 5000],
    age: [0, 99],
    time: [0, 180],
    players: [2, 8],
    categories: [],
  });

  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-asc', 'price-desc'

  // Применяем фильтры и сортировку
  const filteredGames = filterGames(games, filters);

  const sortedGames = [...filteredGames].sort((a, b) => {
    switch(sortBy) {
      case 'price-asc':
        return a.specs.price - b.specs.price;
      case 'price-desc':
        return b.specs.price - a.specs.price;
      default:
        return 0;
    }
  });

  return (
    <div>
      <Slider />
      <div className="catalog-container">
        <div className="catalog-header">
          <h1>Каталог настольных игр</h1>
          <div className="controls">
            <div className="sorting">
              <label>Сортировка:</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">По умолчанию</option>
                <option value="price-asc">Цена (по возрастанию)</option>
                <option value="price-desc">Цена (по убыванию)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="catalog-content">
          <aside className="filters-sidebar">
            <Filters 
              filters={filters}
              onFilterChange={setFilters}
            />
          </aside>

          <main className="games-grid">
            {sortedGames.length > 0 ? (
              sortedGames.map(game => (
                <GameCard 
                  key={game.id}
                  game={game}
                  getTimeDisplay={getTimeDisplay} // Передаем функцию как пропс
                />
              ))
            ) : (
              <div className="no-results">
                <h3>Игры не найдены</h3>
                <p>Попробуйте изменить параметры фильтрации</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;