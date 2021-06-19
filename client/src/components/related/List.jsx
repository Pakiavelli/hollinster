import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx';

export default function List({ current, related, productID, setProductID, switchProduct }) {
  const [firstCardIndex, setFirstCardIndex] = useState(0);

  useEffect(() => {
    setFirstCardIndex(0);
  }, [related]);

  const previousCard = () => {
    const previousIndex = firstCardIndex - 1;
    setFirstCardIndex(previousIndex);
  };

  const nextCard = () => {
    const nextIndex = firstCardIndex + 1;
    setFirstCardIndex(nextIndex);
  };

  const displayedCards = related.slice(firstCardIndex, firstCardIndex + 4);

  return (
    <>
      {(related && firstCardIndex) === 0 ? null : <h1 onClick={previousCard}>&#8249;</h1>}
      {displayedCards.map((product) => (
        <Card
          current={current}
          product={product}
          key={product}
          productID={productID}
          switchProduct={switchProduct}
          setProductID={setProductID}
        />
      ))}
      {related && (firstCardIndex + 4 === related.length)
        ? null : <h1 onClick={nextCard}>&#8250;</h1>}
    </>
  );
}
