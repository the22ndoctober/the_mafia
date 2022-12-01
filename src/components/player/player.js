import React from 'react' 
import Fouls from './fouls/fouls'
import '../../style/game/players/players.css'

export default function Player({slot,name,color}){
    
     return(
     <div className='player__row' style={{backgroundColor: color}}>    
         <div className="player__name">{slot} {name}</div>
         <Fouls/>   
     </div>
     )


}