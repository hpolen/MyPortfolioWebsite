import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'

const styles = {
  card: {
    maxWidth: 345,

  },
  media: {
    height: 240,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('./images/ResumeV1.png')}
          style={{width:240, height:240}}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Resume
          </Typography>
          <Typography component="p">  
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);