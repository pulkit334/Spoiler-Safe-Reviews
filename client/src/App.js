import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReviewProvider } from './context/ReviewContext';
import Header from './components/Header';
import Home from './pages/Home';
import CreateReview from './pages/CreateReview';
import './styles/App.css';

function App() {
  return (
    <ReviewProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateReview />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ReviewProvider>
  );
}

export default App;
