import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage.jsx';
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
