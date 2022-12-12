export const pullOnVote = (state,indexes) =>{
    console.log(state.length)
    if(state.length === 0) return [{pull: indexes.pull, exposed: indexes.exposed}]
    if(state.length > 0) return [...state, {pull: indexes.pull, exposed: indexes.exposed}]

    // if(state.values.length != 0 && !state.findIndex(exhibition => exhibition.pull === indexes.pull && exhibition.exposed === indexes.exposed)) return [...state, {pull: indexes.pull,exposed: indexes.exposed}]
    // if(state.values.length != 0 && state.findIndex(exhibition => exhibition.pull === indexes.pull || exhibition.exposed === indexes.exposed)) return state
}