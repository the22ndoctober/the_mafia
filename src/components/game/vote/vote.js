import React from 'react' 
import '../../../style/game/vote/vote.css'
import enums from '../../../store/enums';
import { useSelector, useDispatch } from 'react-redux'
import { selectVote, voteFor } from '../../../store/reducers/day/vote/vote';
import { useEffect } from 'react';

export default function Vote({isOpen}){

    const vote = useSelector(selectVote)
    const dispatch = useDispatch()

    const voteFor = (e)=>{
        switch(e.key){
            case '1': dispatch(voteFor(0))
            break
            case '2': dispatch(voteFor(1))
            break
            case '3': dispatch(voteFor(2))
            break
            case '4': dispatch(voteFor(3))
            break
            case '5': dispatch(voteFor(4))
            break
            case '6': dispatch(voteFor(5))
            break
            case '7': dispatch(voteFor(6))
            break
            case '8': dispatch(voteFor(7))
            break
            case '9': dispatch(voteFor(8))
            break
            case '0': dispatch(voteFor(9))
            break
        }
    }

    useEffect(()=>{
        isOpen && document.addEventListener('keydown', voteFor, true)
        return ()=>{
            document.removeEventListener('keydown', voteFor, true)
        }
    },[isOpen])

    return(
                isOpen && <div className='vote__box'>
                    <h1>Exposed players:</h1>
                    <div className="vote__exposed">
                      
                        {vote.values.map(ex=>{
                            return(
                                
                                <div className="vote__exposedItem" style={{backgroundColor: enums.playerColors[ex.candidature]}}>{ex.candidature+1}</div>
                            )
                        })}

                    </div>
                    
                    
                </div>
        
     )


}