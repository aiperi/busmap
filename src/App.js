import React from 'react';
import './App.css';
import Login from "./containers/Login/Login";
import {Route, Routes} from "react-router-dom";
import {busStops, dashboard, login, releases, reports, rides, routes, singleRide, singleRoute, tracking} from "./paths";
import BusStops from "./containers/BusStops/BusStops";
import TransportRoutes from "./containers/TransportRoutes/TransportRoutes";
import Layout from "./components/UI/Layout/Layout";
import Dashboard from "./containers/DashBoard/Dashboard";
import Tracking from "./containers/Tracking/Tracking";
import Reports from "./containers/Reports/Reports";
import Releases from "./containers/Releases/Releases";
import Rides from "./containers/Rides/Rides";
import SingleRoute from "./containers/SIngleRoute/SingleRoute";
import SingleRide from "./containers/SingleRide/SingleRide";
import Preloader from "./components/UI/Preloader/Preloader";
import DirectionAnimation from "./containers/DIrectionAnimation/DirectionAnimation";
import AddBusStop from "./components/AddBusStop/AddBusStop";


function App() {
  return (
      <Layout>
      <Routes>
          <Route path={busStops} element={<BusStops/>}/>
          <Route path={login} element={<Login/>}/>
          <Route path={routes} element={<TransportRoutes/>}/>
          <Route  index element={<Dashboard/>}/>
          <Route path={tracking} element={<Tracking/>}/>
          <Route path={reports} element={<Reports/>}/>
          <Route path={releases} element={<Releases/>}/>
          <Route path={rides} element={<Rides/>}/>
          <Route path={singleRoute} element={<SingleRoute/>}/>
          <Route path={singleRide} element={<SingleRide/>}/>
          <Route path="/loader" element={<Preloader/>}/>
          <Route path="/testAnimation" element={<DirectionAnimation/>}/>
          <Route path="/addstop" element={<AddBusStop/>}/>
      </Routes>
      </Layout>
  );
}

export default App;
