import { useEffect, useState } from 'react';
import './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube.mostPopularVideo("bts")
      .then(res => setVideos(res.items));
  }, [youtube])
  console.log(videos);
  return (
    <div className={styles.app}>
      <SearchHeader />
      <section className={styles.content}>
        <div className={styles.list}>
          <VideoList videos={videos} />
        </div>
      </section>
    </div>
  );
}

export default App;
