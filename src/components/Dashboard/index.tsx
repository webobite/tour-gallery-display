import React from 'react'
import "./style/style.css"
import NavigationBar from '../NavigationBar/NavigationBar'
import HeaderBar from '../HeaderBar/HeaderBar'
import { Switch, Route } from 'react-router-dom'
import HomeDashboard from '../HomeDashboard/HomeDashboard'
import TravelPlanComponent from '../TravalPlanComponent/TravelPlanComponent'
import SocialConnectComponent from '../SocialConnectComponent/SocialConnectComponent'
import ProfileComponent from '../ProfileComponent/ProfileComponent'
import GalleryComponent from '../GalleryComponent/GalleryComponent'

// Pass username in Dashboard through props
function Dashboard({ match: { params: { username } } }: any) {
    return (
        <div>
            <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
                <NavigationBar username={username} />
                <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
                    <HeaderBar username={username} />
                    <div>
                        {/* ROUTES DEFINEDED HERE  --> NOT WORKING HERE*/}
                        <Route path="/dashboard/home/:username" exact component={HomeDashboard} />
                        <Route path="/dashboard/travelplan/:username" exact component={TravelPlanComponent} />
                        <Route path="/dashboard/gallery/:username" exact component={GalleryComponent} />
                        <Route path="/dashboard/socialconnect/:username" exact component={SocialConnectComponent} />
                        <Route path="/dashboard/profile/:username" exact component={ProfileComponent} />
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Dashboard
