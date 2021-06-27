import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ProfileComponent from './components/ProfileComponent/ProfileComponent';
import SocialConnectComponent from './components/SocialConnectComponent/SocialConnectComponent';
import TravelPlanComponent from './components/TravalPlanComponent/TravelPlanComponent';
import HomeDashboard from './components/HomeDashboard/HomeDashboard';
import GalleryComponent from './components/GalleryComponent/GalleryComponent';


function App() {
    return (
        <Router>
            <div className="App">
                {/* <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/dashboard/:username" exact component={Dashboard} />
                    <Route path="/dashboard/home/:username" exact component={HomeDashboard} />
                    <Route path="/dashboard/travelplan/:username" exact component={TravelPlanComponent} />
                    <Route path="/dashboard/gallery/:username" exact component={GalleryComponent} />
                    <Route path="/dashboard/socialconnect/:username" exact component={SocialConnectComponent} />
                    <Route path="/dashboard/profile/:username" exact component={ProfileComponent} />
                </Switch> */}
                {/* <Route path="/dashboard/:username" exact component={Dashboard} /> */}
                <Dashboard />
            </div>
        </Router>
    );
}

export default App;
