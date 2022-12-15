import {React, useState} from 'react' 
import Fouls from './fouls/fouls'
import Roles from './roles/roles'
import '../../../style/game/players/players.css'
import enums from '../../../store/enums'
import { useSelector, useDispatch } from 'react-redux'
import { makeActive, pullOnVote, removeFromVote,selectActive, selectExhibition} from '../../../store/reducers/day/exhibition/exhibition'
import { useEffect } from 'react'

export default function Player({slot,name,color,showRoles}){
    const dispatch = useDispatch()
    const active = useSelector(selectActive)
    const exhibation = useSelector(selectExhibition)
    const [exposedPlayer, setExposedPlayer] = useState('none')

    useEffect(()=>{
        if(active === slot && exhibation.length != 0){
            setExposedPlayer(exhibation[exhibation.findIndex(exposed=> exposed.pull === slot)].exposed + 1)
        }
    }, [exhibation])

    const beExposed = ()=>{
        dispatch(pullOnVote(slot))
    }

    const activate = ()=>{
        dispatch(makeActive(slot))
    }
    
     return(
    <div className="player__row" >
        <div className={`player__background ${active === slot ? 'player__background-active' : ''}` } style={{backgroundColor: color}} onClick={beExposed}>    
            <div className="player__name">{`${slot+1}.`} {name}</div>
            <Fouls id={slot}/>   
        </div>
        <Roles showRoles={showRoles} id={slot}/>
        <button className='player__speakbutton' onClick={activate}>Speak</button>
        <div className={`player__exposed ${exposedPlayer != 'none' ? '' : 'player__exposed-hidden'}`} style={{backgroundColor: enums.playerColors[exposedPlayer-1]}}>{exposedPlayer}</div>
        {/* <button onClick={()=>{
            dispatch(removeFromVote())
        }}>POZAT</button> */}
     </div>
     )


}