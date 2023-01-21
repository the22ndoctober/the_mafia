import enums from "../../../enums";

export const setStatus = (state, action)=>{
    switch(action.payload.type){
        case 'MUTED': 
            return state.map((value,id)=> id === action.payload.id ? enums.playerStatuses.muted : value)
        case 'VOTED': 
            return state.map((value,id)=> id === action.payload.id ? enums.playerStatuses.voted : value)
        case 'KILLED': 
            return state.map((value,id)=> id === action.payload.id ? enums.playerStatuses.killed : value)
        case 'DELETED': 
            return state.map((value,id)=> id === action.payload.id ? enums.playerStatuses.deleted : value)
        case 'ALIVE': 
            return state.map((value,id)=> id === action.payload.id ? enums.playerStatuses.alive : value)
    }
}