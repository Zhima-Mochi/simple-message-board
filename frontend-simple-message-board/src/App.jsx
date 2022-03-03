// import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import store from './store';
import PostResponse from './pages/PostResponse';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Navigate to="/posts" />}></Route>
        <Route path='/posts' element={<Main />}></Route>
        <Route path='/posts/:post_id' element={<PostResponse/>}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
