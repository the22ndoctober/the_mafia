import React from 'react' 

export default function Fouls(){
    
     return(
        <div className='player__fouls'>
            <button className="player__addFoul">+</button>
            <button className="player__removeFoul">-</button>
            <div className="player__foulCount">{0}</div>
        </div>
     )


}