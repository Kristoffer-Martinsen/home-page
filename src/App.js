import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ListOfProjects from './Components/ListOfProjects';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="Container">
        <AboutMe/>
        <ListOfProjects/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
