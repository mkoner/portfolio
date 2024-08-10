import logo from './logo.svg';
import './App.css';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;