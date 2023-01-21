import enums from "../../../enums"



export const activateСandidature = (state, candidature)=>{
    if(state.candidature === 'none') return {values: state.values, candidature: candidature}
    if(state.candidature === candidature){}
}

export const getVote = exhibition =>{
    return exhibition.map(exhibition => {
        return {pull: exhibition.pull, candidature: exhibition.exposed, votes:[]}
    })
}

export const getVoters = statuses =>{
    const voters = []
    statuses.forEach((status,id)=>{
        if(status === enums.playerStatuses.alive || status === enums.playerStatuses.muted){
            voters.push(id)
        }
    })
    return voters
}

export const voteFor = (state, id)=>{
    let newVote = {}
    if(state.currentCandidature != 'none'){
        if(state.didNotVote.some(value=> value === id)){
            newVote.values = state.values.map(value=>{
                if(value.candidature === state.currentCandidature){
                    return {pull: value.pull, candidature: value.candidature, votes:[...value.votes,id]}
                }
                return value
                
            })
            newVote.didNotVote = newVote.didNotVote.filter(value=> value != id)
        }
        if(!state.didNotVote.some(value=> value === id)){
            alert('player already voted!')
        }
    }
    else{
        console.log('hut')
        newVote = state
    }
    return newVote
}