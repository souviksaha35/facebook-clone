import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      {/* Header
      <Header/>

      <div className="app__body">
        <Sidebar/>
        <Feed/>
      </div> */}

      {/** Banner */}
      <div className="app__banner" style={{ backgroundImage: `url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")`, flex: 1, height: '100%',}}>
      
      </div>
    </div>
  );
}

export default App;
