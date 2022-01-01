import { useEffect, useState } from 'react';
import './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  const onSearch = (query) => {
    youtube.search(query)
      .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
      .then(items => {
        setVideos(items);
        setSelectedVideo({ id: null });
      });
  }
  const onVideoClick = (selectedVideo) => {
    setSelectedVideo(selectedVideo);
  }
  useEffect(() => {
    youtube.mostPopularVideo()
      .then(res => setVideos(res.items));
  }, [youtube])


  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <section className={styles.content}>
        {selectedVideo.id && ( //
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>)
        }
        <div className={styles.list}>
          <VideoList onVideoClick={onVideoClick} videos={videos} display={selectedVideo.id ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
