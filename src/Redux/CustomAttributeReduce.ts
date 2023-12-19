import {createSlice} from '@reduxjs/toolkit';
import { Dispatch } from 'react';

const slice = createSlice({
    name: 'home',
    initialState: {
        showCreatePopup : false
    },
    reducers: {
        popupStatusChanges : (state, action) =>{
            state.showCreatePopup = action.payload.status;
        },
    }
});

export default slice.reducer
//Actions
const {popupStatusChanges} = slice.actions;

export const changePopupStatus = (status:boolean): any => (dispatch: Dispatch<any>): void =>{
    dispatch(popupStatusChanges({status}));
}

