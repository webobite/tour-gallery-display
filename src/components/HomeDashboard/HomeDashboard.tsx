import React from 'react'
import "./style/style.css"
import NavigationBar from '../NavigationBar/NavigationBar'
import HeaderBar from '../HeaderBar/HeaderBar'
// Pass username in Dashboard through props
function HomeDashboard({ match: { params: { username } } }: any) {
    return (
        <div>
            {/* <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
                <NavigationBar username={username} />
                <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
                    <HeaderBar username = {username} /> */}
                    <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
                        <div className="flex flex-col lg:flex-row h-full w-full">

                            <div className="border pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">

                                {/* <!-- control content left --> */}
                                <div className="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4"></div>
                                <div className="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4"></div>

                            </div>

                            <div className="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">

                                {/* <!-- overflow content right --> */}
                                <div className="bg-green-200 w-full h-full min-h-0 min-w-0 overflow-auto">
                                    <div className="bg-pink-600 w-screen h-64"></div>
                                    <div className="bg-blue-600 w-full h-64"></div>
                                    <div className="bg-purple-600 w-screen h-64"></div>
                                    <div className="bg-red-600 w-full h-64"></div>
                                    <div className="bg-yellow-600 w-screen h-64"></div>
                                    <div className="bg-green-600 w-full h-64"></div>
                                </div>

                            </div>

                        </div>
                    </section>
                    <footer className="px-6 py-3 border-t flex w-full items-end">
                        <div className="flex-1"></div>
                        <button
                            className="shadow-md ml-auto border rounded-full ml-2 w-14 h-14 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                            <i className="fas fa-question fill-current"></i>
                        </button>
                    </footer>
                {/* </main> */}
            {/* </section> */}
        </div>
    )
}

export default HomeDashboard
