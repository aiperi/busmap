import {createSlice} from "@reduxjs/toolkit";

const name = 'stops';

const initialState = {
    stops: [],
    singleStop: null,
    fetchLoading: false,
    addLoading: false,
    allStops: 0,
    stopsForBus: 0,
    stopsForTrolleybus: 0,
    stopsForTaxi: 0,
    unknownStops: 0,
    deleteLoading: false,
    editOpen: false,
    editStopId: null,
    transportTypes: "Все",
    showOverlay: false,
    stopInRoutes: null,
    routesCountInStop:0,

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
                state.singleStop = null;
            },
            fetchStopsFailure(state) {
                state.fetchLoading = false;
            },

            fetchSingleStopRequest(state) {

            },
            fetchSingleStopSuccess(state, action) {
                state.singleStop = action.payload;
            },
            addStopRequest(state) {
                state.addLoading = true;
            },
            addStopSuccess(state) {
                state.addLoading = false;
            }
            ,
            addStopFailure(state) {
                state.addLoading = false;
            },
            fetchAllStopsCountRequest(state) {

            },
            fetchStopsForBusRequest(state) {

            },
            fetchStopsForTrolleybusRequest(state) {

            },
            fetchStopsForTaxiRequest(state) {

            },
            fetchUnknownStopsRequest(state) {

            },
            fetchAllStopsCountSuccess(state, action) {
                state.allStops = action.payload;
            },
            fetchStopsForBus(state, action) {
                state.stopsForBus = action.payload;
            },
            fetchStopsForTrolleybus(state, action) {
                state.stopsForTrolleybus = action.payload;
            },
            fetchStopsForTaxi(state, action) {
                state.stopsForTaxi = action.payload;
            },
            fetchUnknownStops(state, action) {
                state.unknownStops = action.payload;
            },
            deleteStopRequest(state) {
                state.deleteLoading = true;
            },
            deleteStopSuccess(state, {payload: id}) {
                state.deleteLoading = false;
                state.stops = state.stops.filter(stop => stop._id !== id);
                state.singleStop = null;
            },
            deleteStopFailure(state, action) {
                state.deleteLoading = false;
            },
            editStopRequest(state) {
                state.addLoading = true;
            },
            editStopSuccess(state) {
                state.addLoading = false;
                state.singleStop = null;
            },
            editStopFailure(state) {
                state.addLoading = false;
            },
            showEditOpen(state) {
                state.editOpen = true;
            },
            hideEditOpen(state) {
                state.editOpen = false;
            },
            getStopIdToEdit(state, action) {
                state.editStopId = action.payload;
            },
            changeTransportType(state, action) {
                state.transportTypes = action.payload
            },
            showOverlay(state) {
                state.showOverlay = !state.showOverlay;
            },
            deleteSelectedStopRequest(state) {
                state.deleteLoading = true;
            },
            deleteSelectedStopSuccess(state, {payload: id}) {
                state.deleteLoading = false;
                for (let i = 0; i < id.length; i++) {
                    state.stops = state.stops.filter(stop => stop._id !== id);
                }
                state.singleStop = null;
            },
            deleteSelectedStopFailure(state, action) {
                state.deleteLoading = false;
            },
            fetchStopInRoutesRequest() {

            },
            fetchStopInRoutesSuccess(state, action) {
                state.stopInRoutes = action.payload
                if(action.payload){
                    state.routesCountInStop = Object.keys(state.stopInRoutes).length
                }
            },

        }
    })
;

export default stopSlice;