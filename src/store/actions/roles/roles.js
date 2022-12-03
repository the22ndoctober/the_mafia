import enums from "../../enums";

export function setRole(role){
    switch(role){
        case enums.roles.civil: return enums.roles.civil
        case enums.roles.don: return enums.roles.don
        case enums.roles.mafia: return enums.roles.mafia
        case enums.roles.sherif: return enums.roles.sherif
        case enums.roles.none: return enums.roles.none
    }
}