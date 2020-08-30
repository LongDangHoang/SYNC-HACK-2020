import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import './App.css';
import ProjectCard from './components/project_card/project_card'

function App(props) {
  const [currentProjects, setCurrentProjects] = useState(0);
  const { classes } = props;
  
  useEffect(() => {
    fetch('/api/get_all_projects').then(res => res.json()).then(data => {
      setCurrentProjects(data.projects);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"><h1>KiDIY APP</h1><nav>
        <li>
          <Button className="Button" variant="contained" color="primary">
            Log in
          </Button>
        </li>
        <Button className="Button" variant="contained" color="primary">
          Sign up
        </Button>
      </nav></header>
      
      <body className="ProjectDashboardMainBody">
        <Preferences className="PreferencesMenu"/>
        <div className="ProjectDashboard">
          {createProjectCards(currentProjects)}
        </div>
      </body>
    </div>
  );
}

function createProjectCards(currentProjects) {
  const result = [];
  for (var i=0; i<currentProjects.length; i+=4) {
    var projects = currentProjects.slice(i, i+4)
    result.push(
    <div className='ProjectDashboardRow'>
      { projects.map(p => {
          return (<ProjectCard project={p} className="ProjectCard"/>)
        })
      }
    </div>)
  }
  console.log(result)
  return result
}

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Indoor: false,
      Outdoor: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    // send JSON data to Flask backend
    fetch('/api/update_preferences', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          pref_name: name,
          pref_value: value,
        })
    });
  }

  render() {
    return (
      <form>
        <h1>Kids Information</h1>
        <h2>Activity Location</h2>
        <label>
          <input
            name="Indoor"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           Indoor
        </label><br></br>
        <label>
          <input
            name="Outdoor"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           Outdoor
        </label>
        <h2>Age</h2>
        <label>
          <input
            name="3-6"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           3-6
        </label><br></br>
        <label>
          <input
            name="6-12"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           6-12
        </label><br></br> 
        <label>
          <input
            name="12-16"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           12-16
        </label><br></br><h2>Interest</h2>
        <label>
          <input
            name="16+"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           16+
        </label><br></br><label>
          <input
            name="Arts"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           Arts
        </label><br></br>
        <label>
          <input
            name="Music"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           Music
        </label><br></br>
        <label>
          <input
            name="Computing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           Computing
        </label><br></br>
        <label>
          <input
            name="Biology"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           Biology
        </label><br></br>
        <label>
          <input
            name="Engineering"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           6-12
        </label><br></br><br />
      </form>
    );
  }
}
ReactDOM.render(<Preferences />, document.getElementById('root'));

export default App;