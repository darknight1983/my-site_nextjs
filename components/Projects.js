import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';


const styles = theme => ({
  items: {
    width: '30%',
    height: '30%'
  }
})

class Projects extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant='h2' component='h1' color='primary' align='center'>
          Projects
        </Typography>
        <Grid container justify='center' spacing={8}>
          {[0, 1, 2].map((item, i) => (
            <Grid item key={i} className={classes.items}>
              <Paper square={true}>
                This is a test
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Projects);
