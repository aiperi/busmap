import stopSlice from "../slices/stopSlice";


export const {
    fetchStopsRequest,
    fetchStopsFailure,
    fetchStopsSuccess,
    addStopsRequest,
    addStopSuccess,
    addStopFailure,
} = stopSlice.actions;