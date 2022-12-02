import stopSlice from "../slices/stopSlice";


export const {
    fetchStopsRequest,
    fetchStopsFailure,
    fetchStopsSuccess,
    addStopRequest,
    addStopSuccess,
    addStopFailure,
    fetchStopsForBus,
    fetchStopsForTrolleybus,
    fetchStopsForTaxi,
    fetchUnknownStops,
    fetchStopsForBusRequest,
    fetchStopsForTrolleybusRequest,
    fetchStopsForTaxiRequest,
    fetchUnknownStopsRequest,
    fetchSingleStopRequest,
    fetchSingleStopSuccess,
    fetchAllStopsCountRequest,
    fetchAllStopsCountSuccess,
    deleteStopFailure,
    deleteStopRequest,
    deleteStopSuccess,
    editStopSuccess,
    editStopFailure,
    editStopRequest,
    showEditOpen,
    hideEditOpen,
    getStopIdToEdit
} = stopSlice.actions;