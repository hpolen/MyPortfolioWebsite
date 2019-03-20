import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: '#202020',
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
 },
}


function appBar(props) {
    const { classes } = props;
    return (
<div>
<AppBar position="static" className={classes.root}>
    <Toolbar variant="dense">
       <Typography variant="title" color="inherit" className={classes.grow} >Harry Polen</Typography>
       <Button color="inherit">Information</Button>
       <p> | </p>
       <Button color="inherit">Resume</Button>
       <p> | </p>
       <Button color="inherit">Projects</Button>
    </Toolbar>
</AppBar>
</div>
);
}

appBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(appBar);