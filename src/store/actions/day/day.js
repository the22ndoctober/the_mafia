import { createSlice } from '@reduxjs/toolkit'
import enums from '../../../enums'

export const daySlice = createSlice({
  name: 'day',
  initialState: {
    days:[
        {   
            id: 0,
            expoused:[],
            voted: 'none',
            vote: [],
            killed: 'none',
        }
    ]
    },
  reducers: {
    addDay: state =>{
        console.log(state)
        state.days = [...state.days, 
            {   
                id: state.days.length,
                expoused:[],
                voted: 'none',
                vote: [],
                killed: 'none',
            }
        ]
    },
    fixDay: state => {

    }
    
  }
})

export const {addDay, fixDay} = daySlice.actions

export default daySlice.reducer