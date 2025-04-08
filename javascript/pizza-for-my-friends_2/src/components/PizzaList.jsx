import { useState } from 'react';

export function printPizzaFans(friends, pizzaOffers) {
  return friends.map((friend) => {
    const favouritePizzas =
      pizzaOffers &&
      pizzaOffers
        .filter((pizza) => !pizza?.toppings.some((topping) => friend.noGos.includes(topping)))
        .reduce((favourite, pizza) => {
          const matchCount = pizza?.toppings?.filter((topping) => friend.preferences.includes(topping)).length;

          if (favourite.length === 0 || matchCount > favourite[0].matchCount) {
            return [{ pizza, matchCount }];
          }
          if (matchCount === favourite[0].matchCount) {
            favourite.push({ pizza, matchCount });
          }
          return favourite;
        }, []);

    const result = {
      name: friend.name,
      favouritePizza: favouritePizzas
        .map(({ pizza }) => pizza.name)
        .sort()
        .join(', '),
    };

    return result;
  });
}

export function printFriendsForAPizza(pizza, friends) {
  const bestFriends = friends
    .filter((friend) => {
      const hasNoGos = pizza.toppings.some((topping) => friend.noGos.includes(topping));
      return !hasNoGos;
    })
    .map((friend) => {
      const matchCount = friend.preferences.filter((topping) => pizza.toppings.includes(topping)).length;
      return { matchCount, friend };
    })
    .filter((friend) => friend.matchCount > 0);

  const result = bestFriends
    .map((friend) => friend.friend.name)
    .sort()
    .join(', ');

  return result;
}
export const onClickCallback = (friends, pizza) => {
  printFriendsForAPizza(pizza, friends);
};

export function PizzaList({ pizzaOffers, friends, onClickCallback }) {
  const [pizzaFans, setPizzaFans] = useState(null);
  const [bestFriends, setBestFriends] = useState(null);

  const handleButtonClick = () => {
    printPizzaFans(friends, pizzaOffers);
    setPizzaFans(printPizzaFans(friends, pizzaOffers));
  };

  const handlePizzaClick = (friends, pizza) => {
    onClickCallback(friends, pizza);
    setBestFriends(printFriendsForAPizza(pizza, friends));
  };

  return (
    <>
      <main>
        <h1>Pizza List</h1>
        <section className='list'>
          <div>
            <ul>
              {pizzaOffers.map((pizza) => (
                <li key={pizza.id} onClick={() => handlePizzaClick(friends, pizza)}>
                  {pizza.name}
                </li>
              ))}
            </ul>
          </div>
          <div className='best-friends'>
            {bestFriends && (
              <>
                <h2>Best friends for this Pizza</h2>
                <p>{bestFriends}</p>
              </>
            )}
          </div>
        </section>
        <section className='fans'>
          <div className='pizza-fans'>
            <button onClick={() => handleButtonClick()}>Print Pizza Fans</button>
          </div>
          <div>
            {pizzaFans && (
              <>
                <h3>Pizza Fans</h3>
                {pizzaFans.map((pizzaFan) => (
                  <div key={pizzaFan.name} className='pizza-friends'>
                    <p>{pizzaFan.name}: </p>
                    <p>{pizzaFan.favouritePizza}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
