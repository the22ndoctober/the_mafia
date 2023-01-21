import {React} from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount} from '../../../../store/reducers/fouls/fouls'
import { setStatus } from '../../../../store/reducers/day/playersStatuses/playersStatuses'

export default function Fouls({id}){
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    const incrementFoul = ()=>{
        if(count[id] < 2){
            dispatch(increment(id))
        }
        if(count[id] === 2){
            dispatch(increment(id))
            dispatch(setStatus({type: 'MUTED', id:id}))
        }
    }

    const decrementFoul = ()=>{
        dispatch(decrement(id))
    }
    
    return(
        <div className='player__fouls'>
            <button className="player__addFoul" onClick={incrementFoul}>+</button>
            <button className="player__removeFoul" onClick={decrementFoul}>-</button>
            <div className="player__foulCount">{count[id]}</div>
        </div>
    )


}