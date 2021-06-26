import React from 'react'

const GalleryComponent = ({ match: { params: { username } } }: any) => {
    return (
        <div>
            Gallery Component {username}
        </div>
    )
}

export default GalleryComponent;