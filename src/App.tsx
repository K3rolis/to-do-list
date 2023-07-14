import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import todoPage from './Pages/todoPage';

function App() {
  return (
    <div className="App">
      <h1 className="page-title">To do list</h1>
      <Router>
        <Routes>
          <Route path="/" element={todoPage()}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
