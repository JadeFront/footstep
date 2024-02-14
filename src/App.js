import './App.css';
import About from './Components/About';
import Bestseller from './Components/Bestseller';
import Feedback from './Components/Feedback';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menubar from './Components/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Home/>
      <About/>
      <Bestseller/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
