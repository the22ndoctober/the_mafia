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
         <button className='player__speakbutton' onClick={activate}><svg fill="#fff" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 128 128"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M94.8,51v11.4c0,15.5-12.6,28-28,28h-4.5c-15.5,0-28-12.6-28-28V51h-6.5v11.4c0,17.5,13.2,31.9,30.2,34.1v14.1l-10.2,8.6H43 v5.4h23.9h4.7h14.5v-5.4h-4.7l-10.5-8.9V96.6c17.1-2.1,30.4-16.5,30.4-34.1V51H94.8z"></path> <path d="M73.7,60.7v-6.6h13.7v-8.6H73.7V39h13.7v-8.6H73.7v-6.6h13.6C86.9,12.7,77.8,3.7,66.6,3.7h-4.2c-11.2,0-20.3,9-20.6,20.1 h13.1v6.6H41.7V39h13.2v6.6H41.7v8.6h13.2v6.6H41.7v0.6C41.7,72.7,51,82,62.4,82h4.2c11.4,0,20.7-9.3,20.7-20.7v-0.6H73.7z"></path> </g></svg></button>
        <div className={`player__background ${active === slot ? 'player__background-active' : ''}` } style={{backgroundColor: color}} >    
            <div className="player__name" onClick={beExposed}>{`${slot+1}.`} {name}</div>
            <Fouls id={slot}/>   
        </div>
        <Roles showRoles={showRoles} id={slot}/>    
        <div className={`player__exposed ${exposed !== 'none'? '' : 'player__exposed-hidden'}`} style={{backgroundColor: enums.playerColors[exposed]}} onClick={remove} >{exposed !== 'none'? exposed + 1 + '.' : ''}</div>
     </div>
     )


}