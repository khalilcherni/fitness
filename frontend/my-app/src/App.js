import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import LoginPage from "./components/Register"; // Import LoginPage component
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> {/* Render Navbar outside of Routes */}
        <Routes>
          <Route exact path="/" element={<LoginPage />} /> {/* Use LoginPage as default route */}
          <Route path='/ProfilePage' element={<ProfilePage />} /> {/* Route for ProfilePage */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
