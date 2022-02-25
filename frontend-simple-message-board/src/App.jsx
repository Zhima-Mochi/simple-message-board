// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
