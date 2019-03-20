import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import { Grid, AppBar } from '@material-ui/core'

const styles = {
    root: {
        flexGrow: 1,
        width: '100%',
        height: '25%,'
 },
}
function footer(props) {
    const { classes } = props;
    return (

    <div>
        <Grid container spacing={12}>
            <Grid item xs>
                <AppBar>

                </AppBar>
                
            </Grid>
        </Grid>
    </div>

);
}

footer.propTypes = {
  classes: PropTypes.object.isRequired,
};


    export default withStyles(styles)(footer) 
