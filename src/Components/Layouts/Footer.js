import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid, Paper } from '@material-ui/core'

const styles = theme => ({
    root: {
        width: '100%',
    }
})
export default props =>
    <div>
        <Grid container spacing={12}>
            <Grid item xs>
                <Paper>information</Paper>
            </Grid>
        </Grid>
    </div>