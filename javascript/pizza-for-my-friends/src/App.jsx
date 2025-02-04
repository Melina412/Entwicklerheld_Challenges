import './App.css';
import PizzaList from './components/PizzaList';
import { pizzaOffers, friends } from './utils/lists.js';
import { printFriendsForAPizza } from './utils/friendsForAPizza.js';
import { useState } from 'react';

function App() {
  const [pizza, setPizza] = useState(null);
  const [pizzaFriends, setPizzaFriends] = useState(null);

  const onClickCallback = (friends, pizza) => {
    setPizza(pizza);
    printFriendsForAPizza(pizza, friends);
    setPizzaFriends(printFriendsForAPizza(pizza, friends));
  };

  return (
    <>
      <PizzaList
        pizzaOffers={pizzaOffers}
        friends={friends}
        onClickCallback={onClickCallback}
        pizzaFriends={pizzaFriends}
      />
    </>
  );
}

export default App;
