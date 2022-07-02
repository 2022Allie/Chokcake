import "./App.css";
import Main from "./components/Main/main";
import Signup from "./components/signup";
import Login from "./components/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ChoosePage from "./components/choose";
import LetterOwnerPage from "./components/letterOwner";
import LetterWriterPage from "./components/letterWriterPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Main></Main>}></Route>
                <Route path="/main" element={<Main></Main>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route path="/choosepage" element={<ChoosePage></ChoosePage>}></Route>
                <Route path="/letterOwner" element={<LetterOwnerPage></LetterOwnerPage>}></Route>
                <Route path="/letterWriter" element={<LetterWriterPage></LetterWriterPage>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
