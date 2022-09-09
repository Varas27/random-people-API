import './App.css';
import { PeopleListContainer } from './containers/PeopleListContainer';
import { Footer } from './components/Footer/';

function App() {
  return (
    <div className="App">
      <div className="wave-container-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FDD94C" fillOpacity="1" d="M0,96L80,80C160,64,320,32,480,32C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>
      <div className="container">
        <PeopleListContainer />
      </div>
      <div className="wave-container-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FDD94C" fillOpacity="1" d="M0,288L80,277.3C160,267,320,245,480,224C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <Footer />
    </div>
  );
}

export default App;
