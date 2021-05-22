import React from 'react'

const VideoPlayer = ({ videoId }) => {
    return (
        <iframe
            width="915" height="510"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube"
        />
    )
}

export default VideoPlayer