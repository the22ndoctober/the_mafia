import {React, useState} from 'react' 
import Vote from './vote/vote'
import '../../style/game/game.css'
import '../../style/game/gameTools/gameTools.css'
import PlayersWrap from './playersWrap/playersWrap'
import Timer from './timer/Timer'

export default function Game(){
    const [showVote, setShowVote] = useState(false)

    const openVotePopup = ()=> setShowVote(true)
    const closeVotePopup = ()=> setShowVote(false)

    return(
        <div className='game'>
            <PlayersWrap isOpen={showVote} openVotePopup={openVotePopup} closeVotePopup={closeVotePopup}/>
            <div className="gameTools">
                <Vote isOpen={showVote}/>
                <Timer isOpen={showVote}/>
            </div>
        </div>  
    )


}