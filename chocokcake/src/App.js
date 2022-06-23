import './App.css';
import Main from './components/Main/main';
import Signup from './signup';
import Login from './login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Main></Main>}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
