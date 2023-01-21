import {React, useState} from 'react' 
import Vote from './vote/vote'
import '../../style/game/game.css'
import '../../style/game/gameTools/gameTools.css'
import PlayersWrap from './playersWrap/playersWrap'
import { useDispatch,useSelector } from 'react-redux'
import { makeActive, selectExhibition } from '../../store/reducers/day/exhibition/exhibition'
import { selectStatus } from '../../store/reducers/day/playersStatuses/playersStatuses'
import { getVote, getVoters } from '../../store/reducers/day/vote/vote'
import Timer from './timer/Timer'

export default function Game(){
    const [showVote, setShowVote] = useState(false)
    const dispatch = useDispatch()
    const exhibition = useSelector(selectExhibition)
    const alivePlayers = useSelector(selectStatus)

    const openVotePopup = ()=> {
        dispatch(makeActive('none'))
        dispatch(getVote(exhibition))
        dispatch(getVoters(alivePlayers))
        setShowVote(true)

    }
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