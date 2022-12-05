import {React} from 'react' 
import '../../style/game/game.css'
import PlayersWrap from './playersWrap/playersWrap'
import Timer from './timer/Timer'

export default function Game(){

    return(
        <div className='game'>
            <PlayersWrap/> 
            <Timer/>
        </div>  
    )


}