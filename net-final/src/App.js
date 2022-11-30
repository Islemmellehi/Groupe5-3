import './App.css';
import './css/index.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"

import Netflix from '../src/pages/Netflix';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Player from './pages/Player';
import Movies from './pages/Movies';
import Tvshows from './pages/TVshows';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/> }/>
      <Route exact path='/' element={<Netflix/>}/>
      <Route exact path='/player' element={<Player/>}/>
      <Route exact path='/movies' element={<Movies/>}/>
      <Route exact path='/tv' element={<Tvshows/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
