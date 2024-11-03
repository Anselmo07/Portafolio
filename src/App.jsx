import NavBar from './components/navBar/navBar';
import './App.css'
import Home from './views/home/home';
import About from './views/About/about';
import Skills from './views/skills/skills';
import Project from './views/MyProject/project'
import Contact from './views/Contact/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {

  return (
    <div style={{ backgroundColor: 'var(--bs-info-border-subtle)', padding: '1px'}}>
        <NavBar/>      
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
  )
}

export default App
