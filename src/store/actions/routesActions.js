import routesSlice from "../slices/RoutesSlice";


export const {
    fetchRoutesStopsRequest,
    fetchRoutesStopsFailure,
    fetchRoutesStopsSuccess,
    fetchSingleRoutesRequest,
    fetchRoutesGroupsFailure,
    fetchRoutesGroupsRequest,
    fetchRoutesGroupsSuccess,
    fetchRoutesUnitsFailure,
    fetchRoutesUnitsRequest,
    fetchRoutesUnitsSuccess,
    addRoutesStopRequest,
    addRoutesStopSuccess,
    addRoutesStopFailure,
    assignUnitsToRouteRequest,
    assignUnitsToRouteSuccess,
    fetchSingleRoutesSuccess,
    fetchSingleRoutesFailure,
    assignGroupsToRoutes,
    assignUnitsToRoutes,
    fetchAssignUnitsRequest,
    fetchAssignUnitsSuccess,
    showUnitsCount,
    openAssignSaveButton,
    setGlobalId
} = routesSlice.actions;