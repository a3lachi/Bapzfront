import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState: {
      itms: [] || JSON.parse(window.localStorage.getItem('state')),
    },
    reducers:{
      addOne: (state , action) => {
        var indic = 0
        for (let i=0;i<state.itms.length;i++) {
          if (state.itms[i].productname === action.payload.productname ) {
            if ( state.itms[i].color === action.payload.color ) {
              if ( state.itms[i].size === action.payload.size ) {
                state.itms[i].quantity += action.payload.quantity
                indic = 1
              }
            }
            
          }
        }
        if (indic === 0 )
        {state.itms = [...state.itms, action.payload]; }
        window.localStorage.setItem('state', JSON.stringify(state.itms));
        
      },
      delCart:(state,action) => {
        state.itms = [] 
        window.localStorage.clear()
      },
      updateCart: (state,action) => {
        state.itms = JSON.parse(window.localStorage.getItem('state')) 
      },
      updateQtty : (state,action) => {
        state.itms[action.payload].quantity -= 1 
        if ( state.itms[action.payload].quantity === 0 ) {
          state.itms.splice(action.payload,1)
        }
        window.localStorage.setItem('state', JSON.stringify(state.itms));
      }
    }
  })
  
  
  
  export const { addOne , delCart , updateCart , updateQtty } = cartSlice.actions ;
  export default cartSlice.reducer ;