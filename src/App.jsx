import NavBar from './components/navBar/navBar';
import './App.css'
import Home from './views/home/home';
import About from './views/About/about';
import Skills from './views/skills/skills';

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
    </>
  )
}

export default App
