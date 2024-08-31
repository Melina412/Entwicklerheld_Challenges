const pizzaOffers = [
  {
    id: 1,
    name: 'Margherita',
    toppings: ['tomatoes', 'mozzarella', 'oregano', 'basil'],
  },
  {
    id: 2,
    name: 'Marinara',
    toppings: ['tomatoes', 'garlic', 'basil', 'oregano'],
  },
  {
    id: 3,
    name: 'Funghi',
    toppings: ['tomatoes', 'garlic', 'mushrooms', 'cheese'],
  },
  {
    id: 4,
    name: 'Special',
    toppings: ['tomatoes', 'mozzarella', 'oregano', 'basil'],
  },
  {
    id: 5,
    name: 'Egg',
    toppings: ['tomatoes', 'eggs', 'parmesan', 'basil'],
  },
];

const friends = [
  {
    name: 'Felix',
    noGos: ['tomatoes', 'eggs'],
    preferences: ['basil', 'mozzarella'],
  },
  {
    name: 'Ilja',
    noGos: ['mushrooms', 'spinach'],
    preferences: ['parmesan', 'eggs'],
  },
  {
    name: 'Hans',
    noGos: ['garlic'],
    preferences: ['tomatoes', 'basil'],
  },
];

const printPizzaFans = (friends, pizzas) => {
  return friends.map((friend) => {
    const bestPizzas = pizzas
      .filter(
        (pizza) =>
          !pizza.toppings.some((topping) => friend.noGos.includes(topping))
      ) // 1. Pizzas ohne NoGos filtern
      .reduce((best, pizza) => {
        const matchCount = pizza.toppings.filter((topping) =>
          friend.preferences.includes(topping)
        ).length;

        if (best.length === 0 || matchCount > best[0].matchCount) {
          return [{ pizza, matchCount }];
        }
        if (matchCount === best[0].matchCount) {
          best.push({ pizza, matchCount });
        }
        return best;
      }, []); // 2. Alle Pizzas mit maximalem matchCount speichern

    return {
      name: friend.name,
      favoritePizza: bestPizzas.map(({ pizza }) => pizza.name).join(', '),
    };
  });
};

const onClickCallback = (pizza) => {
  console.log(pizza);
};

const PizzaList = ({ friends, pizzaOffers, onClickCallback }) => {
  printPizzaFans(friends, pizzaOffers);
  // console.log(result);

  // function printFriendsForAPizza(pizza) {
  //   console.log(pizza);
  // }

  return (
    <ul>
      {pizzaOffers.map((pizza) => (
        <li key={pizza.id} onClick={() => onClickCallback(pizza)}>
          {pizza.name}
        </li>
      ))}
    </ul>
  );
};

export default PizzaList;
