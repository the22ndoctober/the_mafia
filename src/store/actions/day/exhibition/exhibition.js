export const pullOnVote = (state,indexes) =>{
    console.log([{pull: [indexes.pull], exposed: [indexes.exposed]}])
    return {pull: indexes.pull, exposed: indexes.exposed}

    // if(state.values.length != 0 && !state.findIndex(exhibition => exhibition.pull === indexes.pull && exhibition.exposed === indexes.exposed)) return [...state, {pull: indexes.pull,exposed: indexes.exposed}]
    // if(state.values.length != 0 && state.findIndex(exhibition => exhibition.pull === indexes.pull || exhibition.exposed === indexes.exposed)) return state
}