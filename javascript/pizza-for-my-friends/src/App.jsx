import './App.css';
import PizzaList from './components/PizzaList';
import { pizzaOffers, friends } from './utils/lists.js';

function App() {
  const onClickCallback = (pizza) => {
    // dummy function
    console.log(pizza);
  };

  return (
    <>
      <PizzaList pizzaOffers={pizzaOffers} friends={friends} onClickCallback={onClickCallback} />
    </>
  );
}

export default App;
