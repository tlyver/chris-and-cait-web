import './App.scss';
import './Global.scss';
import './fonts.scss';
import Banner from './Banner.js';
import Body from './Body.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Banner />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
