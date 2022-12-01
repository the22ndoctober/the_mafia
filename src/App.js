import React from 'react' 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/about'
import Users from './components/users'
import Game from './components/game/game';
import './style/navigation/navigation.css'


export default function App() {
  

  return (
    <Router>
      <div className='header'>
        <div className="logo">
          MAFIA GAME
        </div>
        <nav className='navigation'>
          <div className='navigation__element navigation__home'>
            <Link to="/">Home</Link>
          </div>

          <div className='navigation__element navigation__rating'>
            <Link to="/about">Rating</Link>          
          </div>
          
          <div className='navigation__element navigation__about'>
            <Link to="/users">About</Link>
          </div>    

          <button className='navigation__element navigation__createGame'>
            <Link to="/game">+Create Game</Link>
          </button>
        </nav>       
      </div>
      <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/" element={'HOME'}/>            
          
        </Routes>
    </Router>
  );
}