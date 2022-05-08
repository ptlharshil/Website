
import './App.css';
import Home from './components/Home Page/Home.jsx';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <>
    <div className='container'>
      
      <div className='home'>
        <Home/>
      </div> 
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='contact'>
        <Contact/>
      </div>
      
    </div> 
    
    <div className='aboutContainer'>
        <About/>
    </div>

    <div className='educationContainer'>
        <Education/>
    </div>

    <div className='experienceContainer'>
        <Experience/>
    </div>
    </>
  );
}

export default App;
