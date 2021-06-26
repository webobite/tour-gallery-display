import React from 'react'

const SocialConnectComponent = ({ match: { params: { username } } }: any) => {
    return (
        <div>
            Social Connect Component {username}
        </div>
    )
}

export default SocialConnectComponent;