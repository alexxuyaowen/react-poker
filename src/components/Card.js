import { useState, useEffect } from 'react';

const Card = props => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <img
      className={isSelected ? 'card selected' : 'card'}
      src={props.src}
      onClick={() => setIsSelected(prev => !prev)}
    />
  );
};

export default Card;
