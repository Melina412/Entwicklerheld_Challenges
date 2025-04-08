# Pizza for my Friends - Version 2

In dieser Version habe ich analog zu dem Template alle Funktionen in eine einzelne Datei geschrieben und ein paar Tippfehler verbessert. Man kann auf Entwicklerheld nämlich leider keine React Projektstruktur erstellen, weil man ja nur eine einzige Datei zur Verfügung hat. Das 2. Scenario ging zuerst trotzdem nicht. Es wurden keine Fehler oder irgend ein Feedback von den Tests angezeigt, die Aufgabe war einfach nur rot. Man hat auch keinen Einblick in die Projektstruktur, also ist debugging leider auch nicht möglich. Aber dann habe ich noch einen letzten Tippfehler gefunden, und als ich den korrigiert hatte wurden dann beim Test Run auch endlich die Fehler angezeigt.

## Fehler in der vorherigen Version

### onClickCallback Parameter vertauscht

Aufgabe: "If you click on a pizza, a method named `onClickCallback` with the arguments `friends` and `pizza` should be called," - Für mich heißt das, die Callback Funktion sieht so aus: `onClickCallback(friends, pizza)`. Aber LEIDER NEIN, weil sie eigentlich so aussehen soll: `onClickCallback(pizza, friends)`, also mit umgedrehter Reihenfolge der Parameter. Das ist unlogisch und man kann das halt erst merken, wenn die Tests zeigen, dass die expected und received inputs genau vertauscht sind.

### Sortierung nach matchCount vergessen

Ein weiterer Fehler war in der `printPizzaFans`-Funktion. Hier hatte ich nur die Freunde mit matches ermittelt und diese dann alphabetisch sortiert. Jedoch musste man zuerst noch die Freunde mit dem höchsten matchCount filtern und nur diese dann alphabetisch sortieren.

## Code

In meinem Projekt habe noch ein paar Funktionen ergänzt, damit man sich die Ausgaben den Funktionen auch ansehen kann. Die Version ohne Extras ist hier:

```js
import React from 'react';

// Start to implement a stateless react component.
// Stateless components in react are simple functions, which return html

export function printPizzaFans(friends, pizzaOffers) {
  return friends.map((friend) => {
    const favouritePizzas = pizzaOffers
      .filter((pizza) => !pizza.toppings.some((topping) => friend.noGos.includes(topping)))
      .reduce((favourite, pizza) => {
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
    // hier müssen erst noch die Freunde mit dem höchsten matchCount gefiltert werden
    .filter((friend) => friend.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);

  const bestMatchCount = bestFriends[0].matchCount;

  return bestFriends
    .filter((friend) => friend.matchCount === bestMatchCount)
    .map((friend) => friend.friend.name)
    .join(', ');
}

export const onClickCallback = (pizza, friends) => {
  printFriendsForAPizza(pizza, friends);
};

export function PizzaList({ pizzaOffers, friends, onClickCallback }) {
  return (
    <ul>
      {pizzaOffers.map((pizza) => (
        <li key={pizza.id} onClick={() => onClickCallback(pizza, friends)}>
          {pizza.name}
        </li>
      ))}
    </ul>
  );
}
```
