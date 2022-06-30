
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/About/AboutPage.jsx';
import HomePage from './Pages/Home/HomePage.jsx';
import EducationPage from './Pages/Education/EducationPage.jsx';
import WorkPage from './Pages/Work/WorkPage.jsx';
import ExperiencePage from './Pages/Experience/ExperiencePage.jsx';


function App() {
  return (
    <>
    <HomePage />
    <AboutPage />
    <EducationPage/>
    <ExperiencePage/>
    <WorkPage/>
    {/* <BrowserRouter>
      <Routes> */}
        {/* <Route  path='/' element={<HomePage/>}/> */}
          
        {/* </Route> */}
        {/* <Route path='/about' element={<AboutPage/>}/> */}
          
        {/* </Route> */}
        {/* <Route path='/education' element={<EducationPage/>}/> */}
          
        {/* </Route> */}
        {/* <Route path='/experience' element={<ExperiencePage/>}/> */}
          
        {/* </Route> */}
        {/* <Route path='/work' element={<WorkPage/>}/> */}
          
        {/* </Route> */}
    {/* </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
