import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Trending from './components/Trending/Trending';
import { Router, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      {/* <Trending/> */}
    </div>
  );
}

export default App;
