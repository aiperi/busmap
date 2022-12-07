import {createSlice} from "@reduxjs/toolkit";

const name = 'stops';

const initialState = {
    transportType: null,
    stops: [],
    groups: [],
    units: [],
    assign: [],
    assignRoute: [],
    assignGroups: [],
    assignUnits: [],
    fetchLoading: false,
    singleRoutes: [],
    saveButton: false,
    pageCount: 1,
    globalID: null
}

const routesSlice = createSlice({
        name,
        initialState,
        reducers: {
            fetchRoutesStopsRequest(state) {
                state.fetchLoading = true;
            },
            fetchRoutesStopsFailure(state) {
                state.fetchLoading = false;
            },
            fetchRoutesStopsSuccess(state, action) {
                state.stops = action.payload;
                state.fetchLoading = false;
            },
            fetchRoutesGroupsRequest(state) {
                state.fetchLoading = true;
            },
            fetchRoutesGroupsFailure(state) {
                state.fetchLoading = false;
            },
            fetchRoutesGroupsSuccess(state, action) {
                state.groups = action.payload;
                state.fetchLoading = false;
            },
            fetchRoutesUnitsRequest(state) {
                state.fetchLoading = true;
            },
            fetchRoutesUnitsFailure(state) {
                state.fetchLoading = false;
            },
            fetchRoutesUnitsSuccess(state, action) {
                state.units = action.payload;
                state.allRoutes = false;
            },
            fetchSingleRoutesRequest(state) {
                state.singleRoutesLoad = true;
            },
            fetchSingleRoutesSuccess(state, action) {
                state.singleRoutes = action.payload;
                state.singleRoutesLoad = false;
            },
            fetchSingleRoutesFailure(state) {
                state.singleRoutesLoad = false;
            },
            addRoutesStopRequest(state) {
                state.addLoading = true;
            },
            addRoutesStopSuccess(state, action) {
                state.addLoading = false;
            },
            addRoutesStopFailure(state) {
                state.addLoading = false;
            },
            setTransportType(state, action) {
                state.transportType = action.payload
            },
            openAssignSaveButton(state) {
                state.saveButton = !state.saveButton;
            },
            assignUnitsToRouteRequest(state) {
                state.assignLoading = true
            },
            assignUnitsToRouteSuccess(state, action) {
                state.assignRoute = action.payload
                state.assignLoading = false
            },
            assignUnitsToRouteFailure(state) {
                state.assignLoading = false
            },
            assignGroupsToRoutes(state, action) {
                state.assignGroups.push(...action.payload)
            },
            assignUnitsToRoutes(state, action) {
                state.assignUnits.push(...action.payload)
            },
            showUnitsCount(state, {payload: {groupid, unites}}) {
                // console.log(groupid)
                // console.log(unites)
                if (state.assign[groupid-1]) {
                    state.assign[groupid-1]=state.assign[groupid-1].filter((el) => el.groupid !== groupid)
                } else {
                    state.assign[groupid - 1] = unites
                }
            },
            setGlobalId(state, action){
               state.globalID = action.payload
            }
        }
    })

;

export default routesSlice;