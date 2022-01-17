
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Projects from './components/Projects/Projects';
import About from  './components/About/About';
import Testimonials from  './components/Testimonials/Testimonials';
import Contact from  './components/Contact/Contact';


function App(){
  return(
    <div className='App'>
      <NavBar />
      <div className='container'>
        <LandingPage/>
        <About/>
        <Projects/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;