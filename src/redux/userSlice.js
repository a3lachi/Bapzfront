import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {Proxy} from '../components/constants'


const userSlice = createSlice({
  name:"user",
  initialState:{
    email:"",
    pwd:"",
    firstname:"",
    lastname:"",
    username:"",
    badAttempt:false,
    jwt:"",
    commandsFetched:false,
    commands:[],
  },
  reducers:{
    logUser: (state,action) => {
      state.email = action.payload
      state.commandsFetched = false
      state.badAttempt = false
    },
    badUser: (state,action) => {
      console.log('les get it')
      state.badAttempt = true
    },
    newUser:(state,action) => {
      state.email = action.payload
      state.badAttempt = false
      // window.localStorage.setItem('user', JSON.stringify(state.email));
    },
    updateUser:(state,action) => {
      // state.email = JSON.parse(window.localStorage.getItem('user'))
    },
    logOutUser:(state,action) => {
      state.email=""
      state.pwd=""
      state.commands=[]
      state.jwt=""
      state.firstname=""
      state.lastname=""
      state.username=""
      localStorage.removeItem("jwt");
    },
    setCommands: (state,action) => { // after fetch  from database
      // state.commands = [...state.commands, action.payload]
      state.commands = action.payload
      state.commandsFetched = true
      console.log('-------------------',action.payload)
    },
    setCustomerAccountData: (state,action) => {
      console.log('MAWSSL LSTORE',action.payload)
      state.email = action.payload[0]
      state.commandsFetched = false
      state.pwd = action.payload[1]
      state.firstname = action.payload[2]
      state.lastname = action.payload[3]
      state.username = action.payload[4]
    }
    ,
    addCommand : (state,action) => { // add to database
      // state.commands = [...state.commands, action.payload]
      
      
      const camds = action.payload.cmds
      const address = action.payload.adrs
      var cemds = ""
      for (let i=0 ; i<camds.length ; i++) {
        cemds += camds[i].color + ',' + camds[i].size + ',' + camds[i].quantity + ',' + camds[i].ids +'@'
      }
      try {
          const date = new Date() ;
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          const dateE = `${day}/${month}/${year}`
          axios
              .post(`${Proxy}/api/customer/commands`,{jwt:state.jwt ,cmds:cemds , date:dateE , adrs:address})
              .then(state.commandsFetched = false)
              .catch((err) => console.log('ERR during AXIOS to update commands'))
      } catch (err) {
        console.log('ERR during TRY to update commands') ;
      }
    },
    setJwt : (state,action) => {
      state.jwt = action.payload
      localStorage.setItem("jwt", action.payload);
    }
  }
})



export const { logUser , badUser , newUser , updateUser , logOutUser , addCommand , setJwt , setCommand , setCommands , setCustomerAccountData} = userSlice.actions ; 
export default userSlice.reducer ;

