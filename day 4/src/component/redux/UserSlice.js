import { createSlice} from "@reduxjs/toolkit";

 export const UserSlice = createSlice({
    name:"user",
    initialState:{
        user:null

    },
    // 2 methods in reducer
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user = null;
        }
    }
})

export const {login,logout} = UserSlice.actions;
export const selectUser = (state) =>state.user.user;  
// to get from store 

export default UserSlice;