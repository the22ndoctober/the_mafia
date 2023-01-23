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
    if(state.currentCandidature !== 'none'){
        if(state.values.didNotVote.some(value=> value===id)){
            return {
                onVote: state.values.onVote.map(value=>{
                    if(value.candidature === state.currentCandidature){
                        return {pull: value.pull, candidature: value.candidature, votes:[...value.votes,id]}
                    }
                    return value
                }),
                didNotVote: state.values.didNotVote.filter(player=> player !== id)
            }
        }
        if(state.values.onVote.some(vote=> vote.votes.some(value=> value === id))){
            return {
                onVote: state.values.onVote.map(value=>{
                    return {...value, votes: value.votes.filter(vote=> vote !== id)}
                }),
                didNotVote: [...state.values.didNotVote, id]
            }
        }
        alert('player cannot vote')
    }
    return state.values
    
}

export const changeCandidature = (state, id)=>{
    if(state === id) return 'none'
    return id
}