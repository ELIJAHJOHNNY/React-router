import './App.css';
import LogIn from './Components/LogIn';
import { Routes, Route, Link } from "react-router-dom";
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="LogIn" element={<LogIn />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
