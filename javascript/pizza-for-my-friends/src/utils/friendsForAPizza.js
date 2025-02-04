export function printFriendsForAPizza(pizza, friends) {
  const bestFriends = friends
    .filter((friend) => {
      const hasNoGos = pizza.toppings.some((topping) => friend.noGos.includes(topping));
      return !hasNoGos; // Freunde ohne NoGos
    })
    .map((friend) => {
      // matchCount berechnen
      const matchCount = friend.preferences.filter((topping) => pizza.toppings.includes(topping)).length;
      return { friend, matchCount };
    })
    .filter((friend) => friend.matchCount > 0); // Freunde mit matchCount >0

  return bestFriends.map((friend) => friend.friend.name).join(', ');
}
