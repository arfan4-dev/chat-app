import logo from './logo.svg';
import './style.scss';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute> }/>
    </Routes>
    </div>
  );
}

export default App;
