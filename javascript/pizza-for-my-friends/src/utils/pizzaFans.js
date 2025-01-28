export function printPizzaFans(friends, pizzas) {
  return friends.map((friend) => {
    const bestPizzas = pizzas
      .filter((pizza) => !pizza.toppings.some((topping) => friend.noGos.includes(topping))) // 1. Pizzas ohne NoGos filtern
      .reduce((best, pizza) => {
        const matchCount = pizza.toppings.filter((topping) => friend.preferences.includes(topping)).length;

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
}
