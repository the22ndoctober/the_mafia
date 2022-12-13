import React from 'react' 
import Fouls from './fouls/fouls'
import Roles from './roles/roles'
import '../../../style/game/players/players.css'
import enums from '../../../store/enums'
import { useSelector, useDispatch } from 'react-redux'
import { makeActive, pullOnVote, removeFromVote,selectActive} from '../../../store/reducers/day/exhibition/exhibition'

export default function Player({slot,name,color,showRoles}){
    const dispatch = useDispatch()
    const active = useSelector(selectActive)

    const activate = ()=>{
        dispatch(makeActive(slot))
    }
    
     return(
    <div className="player__row">
        <div className={`player__background ${active === slot ? 'player__background-active' : ''}` } style={{backgroundColor: color}}>    
            <div className="player__name">{`${slot+1}.`} {name}</div>
            <Fouls id={slot}/>   
        </div>
        <Roles showRoles={showRoles} id={slot}/>
        <button onClick={activate}>Make Active</button>

     </div>
     )


}