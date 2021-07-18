import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Register from '../Register';
import HomeDashboard from '../HomeDashboard/HomeDashboard';
import TravelPlanComponent from '../TravalPlanComponent/TravelPlanComponent';
import GalleryComponent from '../GalleryComponent/GalleryComponent';
import SocialConnectComponent from '../SocialConnectComponent/SocialConnectComponent';
import ProfileComponent from '../ProfileComponent/ProfileComponent';

const routes = [
    {
        path: '/dashboard/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: HomeDashboard
    },
    {
        path: '/dashboard/travelplan',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: TravelPlanComponent
    },
    {
        path: '/dashboard/gallery',
        sidebar: () => <div>bubblegum!</div>,
        main: GalleryComponent
    },
    {
        path: '/dashboard/socialconnect',
        sidebar: () => <div>bubblegum!</div>,
        main: SocialConnectComponent
    },
    {
        path: '/dashboard/profile',
        sidebar: () => <div>bubblegum!</div>,
        main: ProfileComponent
    },
]


const RouteComponent = () => {
    return (
        <div>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/dashboard/:page" exact component={Dashboard} />
        </div>
    )
}
export default RouteComponent;