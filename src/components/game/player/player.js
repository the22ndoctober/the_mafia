import {React, useState} from 'react' 
import Fouls from './fouls/fouls'
import Roles from './roles/roles'
import '../../../style/game/players/players.css'
import enums from '../../../store/enums'
import { useSelector, useDispatch } from 'react-redux'
import { makeActive, pullOnVote, removeFromVote, selectActive, selectExhibition} from '../../../store/reducers/day/exhibition/exhibition'
import { useEffect } from 'react'

export default function Player({slot,name,color,showRoles}){
    const dispatch = useDispatch()
    const active = useSelector(selectActive)
    const exhibation = useSelector(selectExhibition)
    const [exposed,setExposed] = useState('none')

    useEffect(()=>{
        exhibation.some(ex=> ex.pull === slot) &&
            setExposed(exhibation.find(ex => ex.pull === slot).exposed)
    }, [exhibation])

    const beExposed = ()=>{
        dispatch(pullOnVote(slot))
    }

    const activate = ()=>{
        dispatch(makeActive(slot))
    }

    const remove = ()=>{
        dispatch(removeFromVote(exposed))
        setExposed('none')
    }

    
    
     return(
    <div className="player__row" >
        <div className={`player__background ${active === slot ? 'player__background-active' : ''}` } style={{backgroundColor: color}} >    
            <div className="player__name" onClick={beExposed}>{`${slot+1}.`} {name}</div>
            <Fouls id={slot}/>   
        </div>
        <Roles showRoles={showRoles} id={slot}/>
        <button className='player__speakbutton' onClick={activate}>Speak</button>
        <div className={`player__exposed ${exposed !== 'none'? '' : 'player__exposed-hidden'}`} style={{backgroundColor: enums.playerColors[exposed]}} onClick={remove} >{exposed !== 'none'? exposed + 1 + '.' : ''}</div>
     </div>
     )


}