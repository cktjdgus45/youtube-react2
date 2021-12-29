import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video }) => {
    return (
        <li className={styles.container}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={video.snippet.thumbnails.default.url} alt='thumbnail'></img>
                <div className={styles.metadata}>
                    <p className={styles.title}>{video.snippet.title}</p>
                    <p className={styles.channel}>{video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
}

export default VideoItem;