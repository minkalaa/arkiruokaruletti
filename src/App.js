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
          <div className="col-sm-12 col-md-12 col-lg-8">
            <h1 className="appTitle">Arki<wbr/>ruoka<wbr/>ruletti</h1>
            <p className="desc">
            Onko tämän päivän ruuan päättäminen vaikeaa? <br/>
            Anna Ruletin päättää puolestasi!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
          <FortuneWheel />
              <RaffleBtn />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-8 mt-2">
            <h2 className="heading">Ruokavaihtoehdot</h2>
          <FoodList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
