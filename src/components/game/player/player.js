import React from 'react' 
import Fouls from './fouls/fouls'
import Roles from './roles/roles'
import '../../../style/game/players/players.css'
import enums from '../../../store/enums'
import { useSelector, useDispatch } from 'react-redux'
import { pullOnVote, removeFromVote} from '../../../store/reducers/day/exhibition/exhibition'

export default function Player({slot,name,color,showRoles}){
    const dispatch = useDispatch()
    
     return(
    <div className="player__row">
        <div className='player__background' style={{backgroundColor: color}}>    
            <div className="player__name">{`${slot+1}.`} {name}</div>
            <Fouls id={slot}/>   
        </div>
        <Roles showRoles={showRoles} id={slot}/>
        <button onClick={()=>{dispatch(pullOnVote({pull:3,exposed:4}))}}>PRESS ME FUCKING RETARD</button>
        <button onClick={()=>{dispatch(pullOnVote({pull:4,exposed:3}))}}>PRESS ME FUCKING again!!</button>
        <button onClick={()=>{dispatch(removeFromVote())}}>PRESS ME FUCKING again!!</button>

     </div>
     )


}