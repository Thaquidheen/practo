
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './pages/signup/Signup';
function App() {
  return (

    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/signup' element={<Signup/>} />
    </Routes>
 </BrowserRouter>
  
  );
}

export default App;
