import skully from './images/skully.png';
import ghostly from './images/ghostlys.png';
import gallery from './images/fantom-gallery.png';
import popskully from './images/pop-skullys.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className ="row">
          <div className="col">
          <a href="https://skullys.club/">
            <img src={skully} className="App-logo" alt="Join The Cult." />
          </a>
          </div>
          <div className="col">
          <a href="https://ghostgarden.io">
          <img src={ghostly} className="App-logo" alt="Enter the summoning circle." />
          </a>
          </div>
          <div className="col">
          <a href="https://fantomgallery.io">
          <img src={gallery} className="App-logo" alt="Enter the portal." />
          </a>
          </div>
          <div className="col">
          <a href="https://popskullys.com">
          <img src={popskully} className="App-logo" alt="Take The Cult to the mainstream." />
          </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
