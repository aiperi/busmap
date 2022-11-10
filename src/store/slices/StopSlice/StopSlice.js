import {createSlice} from "@reduxjs/toolkit";

const name = 'stops';

const initialState = {
    stops: [],
    fetchLoading: false,
    pageCount: 1,
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
            }
            ,
            fetchStopsFailure(state) {
                state.fetchLoading = false;
            }

        }
    })
;

export default stopSlice;