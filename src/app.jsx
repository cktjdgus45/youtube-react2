import { useEffect, useState } from 'react';
import './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const onSearch = (query) => {
    youtube.search(query)
      .then(res => setVideos(res.items));
  }

  useEffect(() => {
    youtube.mostPopularVideo()
      .then(res => setVideos(res.items));
  }, [youtube])

  console.log(videos);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <section className={styles.content}>
        <div className={styles.list}>
          <VideoList videos={videos} />
        </div>
      </section>
    </div>
  );
}

export default App;
