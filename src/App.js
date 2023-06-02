
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost'
import {continueWatching,originals,trendingNow} from './urls'


function App() {
  return (
   <div>
<Navbar/>
<Banner/>
<RowPost title='Netflix Originals' url={originals} isbig/>
<RowPost title='Trending Now' url={trendingNow}/>
<RowPost title='Continue Watching' url={continueWatching}/>
   </div>
  );
}

export default App;
