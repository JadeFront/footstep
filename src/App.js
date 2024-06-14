import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Sale from './pages/Sale'
import Size from './pages/Size';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter basename="/footstep">
      <header>
        <Navbar/>
      </header>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/men' element={<Men />}/>
            <Route path='/women' element={<Women />}/>
            <Route path='/sale' element={<Sale />}/>
            <Route path='/size' element={<Size />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
