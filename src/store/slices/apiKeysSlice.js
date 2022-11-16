import {createSlice} from "@reduxjs/toolkit";

const name = 'keys';

const initialState = {
    keys: [],
    addLoading: false,
}

const keySlice = createSlice({
        name,
        initialState,
        reducers: {
            addKeyRequest(state) {
                state.addLoading = true;
            },
            addKeySuccess(state, action) {
                // state.stops = action.payload;
                state.addLoading = false;
            },
            addKeyFailure(state) {
                state.fetchLoading = false;
            },
        }
    })
;

export default keySlice;