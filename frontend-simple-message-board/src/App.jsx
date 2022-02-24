// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
    </Routes>
  );
}

export default App;
