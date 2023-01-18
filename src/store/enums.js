const enums = Object.freeze({
    
    roles: {none: 'None', civil: 'Civil', sherif: 'Sherif', mafia: 'Mafia', don: 'Don'},

    gamePhases:{
        roleSet: 'roleSet',
        preparing: 'preparing',
        day: 'day',
        night: 'night',
        endgame: 'endgame'
    },

    playerStatuses:{
        alive: 'alive',
        voted: 'voted',
        killed: 'killed',
        muted: 'muted',
        deleted: 'deleted'
    },

    playerColors:[
        '#343350',
        '#334342',
        '#C69FA2',
        '#00CECB',
        '#4849D2',
        '#00A7E1',
        '#001B2E',
        '#7A6C5D',
        '#78BC61',
        '#E9806E'
    ]

    
})

export default enums