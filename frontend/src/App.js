import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInSide from './Component/Login';
import SignUp from './Component/Registre';
import PrimarySearchAppBar from './Component/Navbar';


function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
     <Routes>
      <Route path="/login" element={<SignInSide/>}/>
      <Route path="/" element={<SignUp/>}/>

     </Routes>
      
    </div>
  );
}

export default App;
