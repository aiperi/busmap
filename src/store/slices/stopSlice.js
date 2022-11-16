import {createSlice} from "@reduxjs/toolkit";

const name = 'stops';

const initialState = {
    stops: [],
    fetchLoading: false,
    addLoading: false,
}

const stopSlice = createSlice({
        name,
        initialState,
        reducers: {
            fetchStopsRequest(state) {
                state.fetchLoading = true;
            },
            fetchStopsSuccess(state, action) {
                state.stops = action.payload;
                state.fetchLoading = false;
            },
            fetchStopsFailure(state) {
                state.fetchLoading = false;
            },
            addStopRequest(state) {
                state.addLoading = true;
            },
            addStopSuccess(state, action) {
                state.addLoading = false;
            }
            ,
            addStopFailure(state) {
                state.addLoading = false;
            }

        }
    })
;

export default stopSlice;