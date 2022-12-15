export const pullOnVote = (state,exposed, active) =>{
    if(active != 'none' ){
        if(state.length === 0) return [{pull: active, exposed: exposed}]
        if(state.length > 0) return [...state, {pull: active, exposed: exposed}]
    }
    else return state

    // if(state.values.length != 0 && !state.findIndex(exhibition => exhibition.pull === indexes.pull && exhibition.exposed === indexes.exposed)) return [...state, {pull: indexes.pull,exposed: indexes.exposed}]
    // if(state.values.length != 0 && state.findIndex(exhibition => exhibition.pull === indexes.pull || exhibition.exposed === indexes.exposed)) return state
}

export const makeActive = (state, id) =>{
    if(state != id) return id
    if(state === id) return 'none'
}