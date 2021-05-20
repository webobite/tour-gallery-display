import React from 'react'
import "./style/style.css"

// Pass username in through props
function NavigationBar(props: any) {
    return (
        <aside className="sm:h-full sm:w-16 w-full h-12 bg-gray-800 text-gray-200">
            <ul className="text-center flex flex-row sm:flex-col w-full">
                <li className="h-14 border-b border-gray-900 hidden sm:block">
                    {/* LOGO of the APP */}
                    <a id="page-icon" href="/" className="h-full w-full hover:bg-gray-700 block p-3">
                        <img className="object-contain h-full w-full" src="https://avatars1.githubusercontent.com/u/6157842?v=4"
                            alt="open-source" />
                    </a>
                </li>
                {/* Inbox logo in side navbar */}
                <li className="sm:border-b border-gray-900 flex-1 sm:w-full" title="Dashboard">
                    <a id="page-icon" href="/" className="h-full w-full hover:bg-gray-700 block p-3">
                        <i className="fas fa-home fill-current"> </i>
                    </a>
                </li>
                {/* Make Travel Plan */}
                <li className="sm:border-b border-gray-900 flex-1 sm:w-full" title="Make Travel Plan">
                    <a id="page-icon" href="/" className="h-full  w-full hover:bg-gray-700 block p-3">
                        <i className="fas fa-globe fill-current"> </i>
                    </a>
                </li>
                {/* Add wishlist */}
                <li className="sm:border-b border-gray-900 flex-1 sm:w-full" title="Photo Gallery">
                    <a id="page-icon" href="/" className="h-full  w-full hover:bg-gray-700 block p-3">
                        <i className="fas fa-film fill-current"> </i>
                    </a>
                </li>
                {/* User Logo in side navBar */}
                <li className="sm:border-b border-gray-900 flex-1 sm:w-full" title="Friends">
                    <a id="page-icon" href="/" className="h-full w-full hover:bg-gray-700 block p-3">
                        <i className="fas fa-users fill-current"> </i>
                    </a>
                </li>
                <li className="sm:border-b border-gray-900 flex-1 sm:w-full" title="Setting">
                    <a id="page-icon" href="/" className="h-full  w-full hover:bg-gray-700 block p-3">
                        <i className="fas fa-cogs fill-current"> </i>

                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default NavigationBar
