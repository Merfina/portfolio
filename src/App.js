import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import DrawerAppBar from './Components/DrawerAppBar';
import { Skills } from './Components/Skills';
const App=()=> {
  return (
    <>
      <DrawerAppBar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      
    </>
  );
}

export default App;
