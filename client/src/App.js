import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Card from "./components/Card";
import Detail from "./components/Detail";
import NavBar from "./components/NavBar";
import CreateGame from "./components/CreateGame";
import About from "./components/About"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path= '/' element={<LandingPage/>}></Route>
        <Route  path= '/home' element={<Home/>}></Route>
        <Route  path= '/card' element={<Card/>}></Route>
        <Route  path= '/createGame' element={<CreateGame/>}></Route>
        <Route  path= '/videogame/:id' element={<Detail/>}></Route>
        <Route  path= '/about' element={<About/>}></Route>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
