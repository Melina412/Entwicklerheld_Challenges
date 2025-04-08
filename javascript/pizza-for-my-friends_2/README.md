# Pizza for my Friends - Version 2

In dieser Version habe ich analog zu dem Entwicklerheld-Template alle Funktionen in eine Datei geschrieben und ein paar Tippfehler verbessert. Das 2. Scenario geht trotzdem nicht auf Entwicklerheld. Es werden keine Fehler oder irgend ein Feedback angezeigt, die Aufgabe ist beim testen einfach nur rot. Man hat auch keinen Einblick in die Projektstruktur, also ist debugging leider auch nicht möglich.

In meinem Projekt funktioniert alles und ich habe noch ein paar Funktionen ergänzt, damit man sich die Ausgaben den Funktionen auch ansehen kann. Die Version ohne Extras findet ihr hier:

```js
import React from 'react';

// Start to implement a stateless react component.
// Stateless components in react are simple functions, which return html

export function printPizzaFans(friends, pizzaOffers) {
  return friends.map((friend) => {
    const favouritePizzas = pizzaOffers
      .filter((pizza) => !pizza.toppings.some((topping) => friend.noGos.includes(topping)))
      .reduce((favorite, pizza) => {
        const matchCount = pizza.toppings.filter((topping) => friend.preferences.includes(topping)).length;

        if (favourite.length === 0 || matchCount > favourite[0].matchCount) {
          return [{ pizza, matchCount }];
        }
        if (matchCount === favourite[0].matchCount) {
          favourite.push({ pizza, matchCount });
        }
        return favourite;
      }, []);

    return {
      name: friend.name,
      favouritePizza: favouritePizzas
        .map(({ pizza }) => pizza.name)
        .sort()
        .join(', '),
    };
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

  return bestFriends
    .map((friend) => friend.friend.name)
    .sort()
    .join(', ');
}

export const onClickCallback = (friends, pizza) => {
  printFriendsForAPizza(pizza, friends);
};

export function PizzaList({ pizzaOffers, friends, onClickCallback }) {
  return (
    <ul>
      {pizzaOffers.map((pizza) => (
        <li key={pizza.id} onClick={() => onClickCallback(friends, pizza)}>
          {pizza.name}
        </li>
      ))}
    </ul>
  );
}
```
