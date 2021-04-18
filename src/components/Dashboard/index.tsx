import React from 'react'

// Pass username in Dashboard through props
function Dashboard({match:{params:{username}}} : any) {
    return (
        <div>
            {username}
        </div>
    )
}

export default Dashboard
