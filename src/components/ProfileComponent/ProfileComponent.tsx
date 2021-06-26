import React from 'react'

const ProfileComponent = ({ match: { params: { username } } }: any) => {
    return (
        <div>
            Profile Component {username}
        </div>
    )
}

export default ProfileComponent;