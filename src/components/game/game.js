import {React} from 'react' 
import '../../style/game/game.css'
import PlayersWrap from './playersWrap/playersWrap'

export default function Game(){

    return(
        <div className='game'>
            <PlayersWrap/>  
        </div>  
    )


}