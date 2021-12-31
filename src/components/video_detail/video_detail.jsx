import React from 'react';

const VideoDetail = ({ video }) => {
    return (
        <section>
            <div className="video"></div>
            <div className="metadata">
                <h1 className="title">{video.snippet.title}</h1>
                <h3 className='channel'>channel</h3>
                <span className="description">description</span>
            </div>
        </section>
    )
}

export default VideoDetail;