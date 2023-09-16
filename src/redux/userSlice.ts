import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type userState ={
    user:{
        id:number,
        name: string,
    } | null,
    token:string
}

const initialState = {} as userState;

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loginUser: (state , action: PayloadAction<userState>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        },
        logoutUser: (state ) => {
        state.user = null;
        state.token = '';
        },
    },
})

// Action creators are generated for each case reducer function
export const { loginUser , logoutUser} = userSlice.actions

export default userSlice.reducer