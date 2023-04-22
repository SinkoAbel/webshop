import './App.css';
import Navbar from './components/elements/Navbar';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from './components/screens/Products';
import Registration from './components/screens/Registration';
import Logout from "./components/screens/Logout";
import Cart from "./components/screens/Cart";
import Orders from "./components/screens/Orders";

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
            <Route path='/logout' element={<Logout/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/orders" element={<Orders/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
