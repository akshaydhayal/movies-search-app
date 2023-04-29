import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Trending from './components/Trending/Trending';

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
