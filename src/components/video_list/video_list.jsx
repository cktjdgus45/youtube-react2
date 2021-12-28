import React from 'react';
import styles from './video_list.module.css';

const VideoList = ({ videos }) => {
    return (
        <ul className={styles.videos}>
            {
                videos.map(video =>
                (
                    <li key={video.snippet.id} className={styles.container}>
                        <div className={styles.video}>
                            <img className={styles.thumbnail} src={video.snippet.thumbnails.default.url} alt='thumbnail'></img>
                            <div className={styles.metadata}>
                                <p className={styles.title}>{video.snippet.title}</p>
                                <p className={styles.channel}>{video.snippet.channelTitle}</p>
                            </div>
                        </div>
                    </li>
                )
                )
            }
        </ul>
    )
}

export default VideoList;