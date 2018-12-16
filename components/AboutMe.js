// May not be the best way to use this componnt.
import Layout from './Layout'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const styles = theme => ({
  title: {
    'fontWeight': '600'
  }
})

const About = (props) => {
  const { classes } = props;
  return (
    <div>
      <section>
        <Grid container justify='center'>
          <Grid item>
            <Typography className={classes.title} variant='h4' component='h1' color='primary' align='center' gutterBottom={true}>
              Jacolby Green
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Grid item>
              <img src='/static/imgs/GitHub-Mark-64px.png' />
            </Grid>
            <Grid item>
              <img src='/static/imgs/GitHub-Mark-64px.png' />
            </Grid>
            <Grid item>
              <img src='/static/imgs/GitHub-Mark-64px.png' />
            </Grid>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}



export default withStyles(styles)(About);
