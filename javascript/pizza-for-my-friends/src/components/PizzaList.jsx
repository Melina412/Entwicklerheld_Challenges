import { useEffect, useState } from 'react';
import { printPizzaFans } from '../utils/pizzaFans.js';

const PizzaList = ({ pizzaOffers, friends, onClickCallback, pizzaFriends }) => {
  const [view, setView] = useState(false);

  const pizzaFans = printPizzaFans(friends, pizzaOffers);
  const togglePizzaFans = () => {
    setView(!view);
  };

  return (
    <>
      <section>
        <h2>Pizza List</h2>
        <ul>
          {pizzaOffers?.map((pizza) => (
            <li key={pizza.id} onClick={() => onClickCallback(friends, pizza)} style={{ cursor: 'pointer' }}>
              {pizza.name}
            </li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: '5rem' }}>
        <h2>Friends for a Pizza</h2>
        <p>{pizzaFriends}</p>
      </section>
      <section>
        <h2>Pizza Fans</h2>
        {!view ? (
          <button onClick={togglePizzaFans}>Print Pizza Fans</button>
        ) : (
          <button onClick={togglePizzaFans}>Hide Pizza Fans</button>
        )}
        {view && <pre>{JSON.stringify(pizzaFans, null, 2)}</pre>}
      </section>
    </>
  );
};

export default PizzaList;
