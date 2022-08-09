const importAll = r => {
  let images = {};
  r.keys().forEach(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

export const images = importAll(
  require.context('./assets/cards', false, /\.(svg)$/)
);

const suits = ['C', 'D', 'H', 'S'];
const ranks = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

const allCards = [];

for (const s of suits)
  for (const r of ranks)
    allCards.push({
      id: suits.indexOf(s) * 13 + ranks.indexOf(r),
      name: s + r,
      image: images[s + r + '.svg'],
    });

export default allCards;
