import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import ListOfProjects from './Components/ListOfProjects';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <AboutMe/>
      <ListOfProjects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
