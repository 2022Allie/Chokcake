import logo from './logo.svg';
import './App.css';
import Main from './main';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Main></Main>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
