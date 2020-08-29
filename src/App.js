import React, { useState, useEffect } from 'react';
// import Menu from './components/Menu';
import './App.css';
// import Index from './components/pages/Index';
// import Projects from './components/pages/Projects';
// import SignUp from './components/pages/Register';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;