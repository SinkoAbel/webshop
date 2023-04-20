import './App.css';
import Navbar from './components/elements/Navbar';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from './components/screens/Products';
import Registration from './components/screens/Registration';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/registration' element={<Registration/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
