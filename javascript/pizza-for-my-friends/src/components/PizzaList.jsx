const PizzaList = () => {
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

  const printPizzaFans = (friends, pizzaOffers) => {
    let favortites = [];
    friends.forEach((friend) => {
      if (pizzaOffers.toppings.includes(friend.preferences)) {
        favortites.push(pizzaOffers.pizza);
      }
    });
    console.log(favortites);
    return favortites;
  };

  printPizzaFans(friends, pizzaOffers);

  return (
    <ul>
      {pizzaOffers.map((pizza) => (
        <li key={pizza.id}>{pizza.name}</li>
      ))}
    </ul>
  );
};

export default PizzaList;
