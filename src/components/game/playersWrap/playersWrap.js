import {React, useState} from 'react' 
import Player from '../player/player'
import enums from '../../../store/enums'
import { showState } from '../../../store/reducers/day/exhibition/exhibition'
import { useDispatch } from 'react-redux'

export default function PlayersWrap(){
    const dispatch = useDispatch()

    const [playersList, setPlayersList] = useState([
        {name:'Floppy', slot:0},
        {name:'Braun', slot:1},
        {name:'Seezov', slot:2},
        {name:'Horizon', slot:3},
        {name:'Green', slot:4},
        {name:'Judge', slot:5},
        {name:'Red Fox', slot:6},
        {name:'Majest', slot:7},
        {name:'Luna', slot:8},
        {name:'Huy', slot:9}
        
    ])

    const [showRoles, setShowRoles] = useState(true)

    return(
        <div className="players">

            <div className="playersWrap">
                {playersList.map(player=>{
                    return <Player  key={player.slot}
                                    slot={player.slot} 
                                    name={player.name} 
                                    color={enums.playerColors[player.slot]}
                                    showRoles={showRoles}
                                    />
                })}
            </div>
            <button className="players__showroles" onClick={()=>{setShowRoles(!showRoles)}}>Show Roles</button>
            <button className="players__showroles" onClick={()=>{dispatch(showState())}}>Show zalupa</button>
            
        </div>
    )


}