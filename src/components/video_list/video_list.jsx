import React from 'react';
import styles from './video_list.module.css';

const VideoList = (props) => {
    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                <img className={styles.img} src='/images/logo.png' alt='thumbnail'></img>
                <div className={styles.div}>
                    <p className={styles.title}>title1</p>
                    <p className={styles.author}>Author</p>
                </div>
            </li>
            <li className={styles.li}>
                <img className={styles.img} src='/images/logo.png' alt='thumbnail'></img>
                <div className={styles.div}>
                    <p className={styles.title}>title1</p>
                    <p className={styles.author}>Author</p>
                </div>
            </li>
        </ul>
    )
}

export default VideoList;