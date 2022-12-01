import React from 'react' 
import '../../style/game/game.css'
import Player from '../player/player'

export default function Game(){
    

    return(
        <div className='game'>
            <div className="players">
                <div className="playersWrap">
                    <Player slot={"1."} name={'Floppy'} color={'#343350'}/>
                    <Player slot={"2."} name={'Braun'} color={'#334342'}/>
                </div>
            </div>
        </div>
    )


}