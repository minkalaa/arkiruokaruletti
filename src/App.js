import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/ToDoList';


function App() {
  return (
    <div className="App">
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-sm-4">
            <h1 className="text-warning">
              Pyörivä ruletti tulee tähän</h1>
          </div>
          <div className="col-sm-8">
            <h1 className="text-warning">Arkiruokaruletti</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque vitae arcu quis pellentesque. Proin sed commodo ante. Donec fringilla finibus ex, eget porta nibh condimentum non. Fusce placerat nisi nisl, sed cursus metus pharetra eu.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h1 className="text-warning">
              Ruletin tuloksen paikka</h1>
          </div>
          <div className="col-sm-8">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
