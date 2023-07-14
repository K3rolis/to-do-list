import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoPage from './Pages/todoPage';

function App() {
  return (
    <div className="App">
      <h1 className="page-title">To do list</h1>
      <TodoPage />
      <Router>
        <Routes>
          <Route path="/" element={TodoPage()}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
