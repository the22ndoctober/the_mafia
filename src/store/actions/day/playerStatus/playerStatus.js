import enums from "../../../enums";

export const setStatus = (state, id, status)=>{
    enums.playerStatuses.some(value=> value === status) ? state.map((value, idx)=>{
        idx === id ? status : value
    }) : state
    
}