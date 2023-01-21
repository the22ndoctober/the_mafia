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
    let newVote = {values: [], currentCandidature: state.currentCandidature, didNotVote: state.didNotVote}
    state.values.forEach(value=> newVote.values.push({...value}))
    newVote.values.map(value=> value.votes = [])
    console.log(newVote)
    newVote.currentCandidature = 2
    if(newVote.currentCandidature != 'none'){
        if(newVote.didNotVote.some(value=> value === id)){
            newVote.values.map(value=>{
                if(value.candidature === newVote.currentCandidature){
                    return {pull: value.pull, candidature: value.candidature, votes:[...value.votes,id]}
                }
                return value
                
            })
            newVote.didNotVote = newVote.didNotVote.filter(value=> value != id)
        }
        if(newVote.didNotVote.some(value=> value !== id)){
            alert('player already voted!')
        }
    }
    return newVote
}