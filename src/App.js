import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
        <p>(# for Testing Flask) The current time is {currentTime}.</p>
        <Form/>
      </header>
    </div>
  );
}

class Form extends React.Component {
  render() {
    return (
      <form>
        <h1>Welcome to the DYI App</h1>
        <p>Enter your age:</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<Form />, document.getElementById('root'));

export default App;