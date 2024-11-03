import NavBar from './components/navBar/navBar';
import './App.css'
import Home from './views/home/home';
import About from './views/About/about';
import Skills from './views/skills/skills';
import Project from './views/MyProject/project'
import Contact from './views/Contact/contact';

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
