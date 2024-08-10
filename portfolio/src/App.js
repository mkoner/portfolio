import logo from './logo.svg';
import './App.css';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;