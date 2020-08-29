import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';

function App(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const { classes } = props;
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
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
      
      <body>
        <Preferences/>
        <div className="MediaCard">
          <MediaCard/>
        </div>
      </body>
    </div>
  );
}

// card styling
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

function MediaCard(name) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require ("./components/images/eggdrop.jpg")}
          title="Egg drop activity"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Egg Drop
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
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
    fetch('/update_preferences', {
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
        <h2>Interest</h2>
        <label>
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
        <br />
      </form>
    );
  }
}
ReactDOM.render(<Preferences />, document.getElementById('root'));

export default App;