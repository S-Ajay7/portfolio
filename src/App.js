
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects'
import Resume from './components/Resume';
import Skill from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
