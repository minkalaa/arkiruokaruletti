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
            <h1>Arkiruokaruletti</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque vitae arcu quis pellentesque. Proin sed commodo ante. Donec fringilla finibus ex, eget porta nibh condimentum non. Fusce placerat nisi nisl, sed cursus metus pharetra eu.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
          <FortuneWheel />
              <RaffleBtn />
          </div>
          <div className="col-sm-8">
            <h2>Ruokavaihtoehdot</h2>
          <FoodList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
