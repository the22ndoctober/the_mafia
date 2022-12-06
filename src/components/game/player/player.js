import React from 'react' 
import Fouls from './fouls/fouls'
import Roles from './roles/roles'
import '../../../style/game/players/players.css'

export default function Player({slot,name,color,showRoles, onVote,pullOnVote}){
    
     return(
    <div className="player__row" onClick={pullOnVote}>
        <div className='player__background' style={{backgroundColor: color}}>    
            <div className="player__name">{`${slot+1}.`} {name}</div>
            <Fouls id={slot}/>   
        </div>
        <Roles showRoles={showRoles} id={slot}/>
        <div className='player__onVote' style={onVote != 'none' ? {display:'block'} : {display: 'none'}}>{onVote}</div>
     </div>
     )


}