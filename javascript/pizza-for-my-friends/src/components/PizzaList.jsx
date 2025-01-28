import { useEffect, useState } from 'react';
import { printPizzaFans } from '../utils/pizzaFans.js';

const PizzaList = ({ pizzaOffers, friends, onClickCallback }) => {
  // const [pizzas, setPizzas] = pizzaOffers && useState(pizzaOffers);
  // const [friendsList, setFriendsList] = friends && useState(friends);

  // printPizzaFans(friends, pizzaOffers);
  // console.log(result);

  // function printFriendsForAPizza(pizza) {
  //   console.log(pizza);
  // }
  console.log({ pizzaOffers });
  console.log({ friends });

  const pizzaList = printPizzaFans(friends, pizzaOffers);
  console.log('pizzaList -', pizzaList);

  return (
    <>
      <h2>List</h2>
      <ul>
        {pizzaOffers?.map((pizza) => (
          <li key={pizza.id} onClick={() => onClickCallback(friends, pizza)}>
            {pizza.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PizzaList;
