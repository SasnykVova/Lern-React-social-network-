import './App.css';
import s from './App.scss';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/Profile/Profile';
import MyPost from './components/Profile/MyPosts/MyPost';
import Dialogs from './components/dialogs/dialogs';
import { Routes, Route } from "react-router-dom";
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="main-content">
          <Routes>
            <Route path="/profile" element={<Profile state={props.state.profilePage}/>} />
            <Route path="/dialogs" element={<Dialogs state={props.state.messagePage}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
