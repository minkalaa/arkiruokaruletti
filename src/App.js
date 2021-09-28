import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodList from './components/FoodList';
import FortuneWheel from './components/FortuneWheel';
import RaffleBtn from './components/Raffle';


function App() {
  return (
    <div className="App">
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-sm-4">
            
          </div>
          <div className="col-sm-8">
            <h1 className="appTitle">Arkiruokaruletti</h1>
            <p>
            Onko tämän päivän ruuan päättäminen vaikeaa? <br/>
            Anna Ruletin päättää puolestasi!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
          <FortuneWheel />
              <RaffleBtn />
          </div>
          <div className="col-sm-8 mt-2">
            <h2>Ruokavaihtoehdot</h2>
          <FoodList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
