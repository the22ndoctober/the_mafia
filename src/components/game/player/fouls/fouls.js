import {React} from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount} from '../../../../store/reducers/fouls/fouls'

export default function Fouls({id}){
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    
    return(
        <div className='player__fouls'>
            <button className="player__addFoul" onClick={()=> dispatch(increment(id))}>+</button>
            <button className="player__removeFoul" onClick={()=> dispatch(decrement(id))}>-</button>
            <div className="player__foulCount">{count[id]}</div>
        </div>
    )


}