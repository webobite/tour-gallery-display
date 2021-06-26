import React from 'react'

const TravelPlanComponent = ({ match: { params: { username } } }: any) => {
    return (
        <div>
            Travel Plan Component {username}
        </div>
    )
}

export default TravelPlanComponent;