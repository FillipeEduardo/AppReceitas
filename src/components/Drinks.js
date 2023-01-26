import React from 'react';
import Header from './Header';
import drinkIcon from '../images/drinkIcon.svg';

function Drinks() {
  return (
    <div>
      <Header />
      <img src={ drinkIcon } alt="Drink" />
      <h1 data-testid="page-title">Drinks</h1>
    </div>
  );
}

export default Drinks;