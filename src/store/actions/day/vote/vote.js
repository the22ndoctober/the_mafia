export const activateСandidature = (state, candidature)=>{
    if(state.candidature === 'none') return {values: state.values, candidature: candidature}
    if(state.candidature === candidature){}
}

export const getVote = (state, exhibition)=>{
    return exhibition.map(exhibition => {
        return {pull: exhibition.pull, candidature: exhibition.exposed, votes:[]}
    })
}