import './App.css';
import { PizzaList, onClickCallback } from './components/PizzaList';
import { pizzaOffers, friends } from './utils/lists';

function App() {
  return (
    <>
      <PizzaList pizzaOffers={pizzaOffers} friends={friends} onClickCallback={onClickCallback} />
    </>
  );
}

export default App;
