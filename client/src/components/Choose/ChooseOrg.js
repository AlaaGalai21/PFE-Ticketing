import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridContainer from '../../comps/Grid/GridContainer';
import GridItem from '../../comps/Grid/GridItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 225,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (

      <div>
    <GridContainer justify="center" spacing={4}>
        <GridItem  xs={11} sm={11}  className={classes.marginAuto}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../../assets/img/organizer.jpg')}
          title="Organizer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Organizer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/Signinorg">
        <Button size="small" color="primary">
          Sign In
        </Button>
        </Link>
      </CardActions>
    </Card>
    </GridItem>
    </GridContainer>
    </div>

  );
}