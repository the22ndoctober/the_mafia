import React from 'react' 
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper'
import '../../../style/game/vote/vote.css'
import enums from '../../../store/enums';
import { useSelector, useDispatch } from 'react-redux'
import { makeActive, pullOnVote, removeFromVote, selectActive, selectExhibition} from '../../../store/reducers/day/exhibition/exhibition'

export default function Vote({isOpen}){

    const currentExhibition = useSelector(selectExhibition)
    const dispatch = useDispatch()

    return(
                isOpen && <Box className='vote__box'>
                    <h1>Exposed players:</h1>
                    <div className="vote__exposed">
                      
                        {currentExhibition.map(ex=>{
                            return(
                                <div className="vote__exposedItem" style={{backgroundColor: enums.playerColors[ex.exposed]}}>{ex.exposed+1}</div>
                            )
                        })}

                    </div>
                    
                    <div className="vote__voters">

                    </div>
                </Box>
        
     )


}