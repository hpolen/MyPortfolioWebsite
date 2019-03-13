import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import LeftCard from './LeftCard'
import MiddleCard from './MiddleCard'
import RightCard from './RightCard'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    left: {
        textAlign: 'center', 
        marginLeft: 80,
        marginRight: 80,
        marginTop: 225,
        marginBottom: 300,  
    },
    middle: {
        textAlign: 'center',  
        marginLeft: 60,
        marginRight: 60,
        marginTop: 225,
        marginBottom: 300,  
    },
    right: {
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,
        marginTop: 225,
        marginBottom: 300,   
   
    
    },
}

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid className={classes.left} item xs>
         <LeftCard /> 
        </Grid>
        <Grid className={classes.middle} item xs>
          <MiddleCard/>
        </Grid>
        <Grid className={classes.right} item xs>
          <RightCard/>
        </Grid>
      </Grid>

     
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
