import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import ContactMe from './Components/ContactMe';
import ListOfProjects from './Components/ListOfProjects';


function App() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <Container fluid>
        <ListOfProjects />
        <Skills/>
        <ContactMe/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
