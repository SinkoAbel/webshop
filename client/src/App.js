import logo from './logo.svg';
import './App.css';
import Navbar from './components/elements/Navbar';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
