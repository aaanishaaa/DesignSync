import React from 'react'
import Navbar from './components/Navbar'
import home from "./assets/home.jpg"
import Home from './components/Hero'

const App = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${home})` }}>
      <Navbar />
      <Home/>
    </div>
  );
};

export default App