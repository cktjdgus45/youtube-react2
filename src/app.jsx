import './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  return (
    <div className="App">
      <SearchHeader />
      <VideoList />
    </div>
  );
}

export default App;
