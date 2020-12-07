import './App.css';
import CreateCard from './create-card/CreateCard';
import CardDisplay from './card-display/CardDisplay';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className='form-column'>
            <CreateCard/>
        </div>

        <div className='card-column'>
            <CardDisplay/>
        </div>
      </div>
    </div>
  );
}

export default App;
