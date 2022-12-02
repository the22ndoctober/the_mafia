import React from 'react' 
import '../../style/game/game.css'
import Player from '../player/player'

export default function Game(){
    

    return(
        <div className='game'>
            <div className="players">
                <div className="playersWrap">
                    <Player slot={0} name={'Floppy'} color={'#343350'}/>
                    <Player slot={1} name={'Braun'} color={'#334342'}/>
                    <Player slot={2} name={'Seezov'} color={'#334342'}/>
                    <Player slot={3} name={'Horizon'} color={'#334342'}/>
                    <Player slot={4} name={'Green'} color={'#334342'}/>
                    <Player slot={5} name={'Judge'} color={'#334342'}/>
                    <Player slot={6} name={'Red Fox'} color={'#334342'}/>
                    <Player slot={7} name={'Majest'} color={'#334342'}/>
                    <Player slot={8} name={'Luna'} color={'#334342'}/>
                    <Player slot={9} name={'Huy'} color={'#334342'}/>
                </div>
            </div>
        </div>
    )


}