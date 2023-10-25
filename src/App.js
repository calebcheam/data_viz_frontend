// App.js
import React from 'react';
import HomePage from './HomePage';
import Main from './Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/main" element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
