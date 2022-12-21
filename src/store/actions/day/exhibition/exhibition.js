export const pullOnVote = (state,exposed, active) =>{
    if(active != 'none' ){
        if(state.some(exhibition=> exhibition.pull === active)) return state.map(exhibition=> exhibition.pull === active ? {pull: active, exposed: exposed} : exhibition)         
        if(state.some(exhibition=> exhibition.exposed === exposed)){
            alert('alerdy exposed')
            return state
        }
        if(state.length === 0) return [{pull: active, exposed: exposed}]
        if(state.length > 0) return [...state, {pull: active, exposed: exposed}]
        
    }
    else return state

    
}

export const removeFromVote = (state, id) => {
    return state.filter(exhibition => id === !exhibition.exposed)
}

export const makeActive = (state, id) =>{
    if(state != id) return id
    if(state === id) return 'none'
}