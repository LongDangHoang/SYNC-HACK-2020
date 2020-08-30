import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    height: 40,
  },
});

function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={props.className} id={props.project['name']}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require ("../images/eggdrop.jpg")}
          title={props.project['name']}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {props.project['name']}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This project takes {props.project['time']} to complete and are suitable for interests in {props.project['tags']}
          </Typography>
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

export default ProjectCard;