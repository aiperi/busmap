import stopSlice from "../slices/stopSlice";


export const {
    fetchStopsRequest,
    fetchStopsFailure,
    fetchStopsSuccess,
    addStopRequest,
    addStopSuccess,
    addStopFailure,
} = stopSlice.actions;