import './App.css';
import { PeopleListContainer } from './containers/PeopleListContainer';

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <PeopleListContainer />
    </div>
  );
}

export default App;
