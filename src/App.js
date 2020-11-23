import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
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
      <Footer/>
    </div>
  );
}

export default App;
