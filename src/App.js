import React from 'react';
import Toolbar from './components/toolbar/toolbar'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Sidebar from './components/sidebar/sidebar'
import { Route, Link, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className="grid-container">
      <BrowserRouter>
        <Toolbar />
        <Sidebar />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
