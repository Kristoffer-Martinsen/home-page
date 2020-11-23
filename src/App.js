import Header from './Components/Header';
import AboutMe from './Components/AboutMe'
import ListOfProjects from './Components/ListOfProjects';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Container">
        <AboutMe/>
        <ListOfProjects/>
      </div>
    </div>
  );
}

export default App;
