export const getTimeDisplay = (game) => {
  return game.specs.time.max
    ? `${game.specs.time.min}-${game.specs.time.max} мин`
    : `от ${game.specs.time.min} мин`;
};
