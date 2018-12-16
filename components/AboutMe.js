// May not be the best way to use this componnt.
import Layout from './Layout'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const styles = theme => ({
  title: {
    'fontWeight': '600'
  },
  icons: {
    width: '30px',
    height: '30px'
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
          <Grid container justify='center' spacing={24}>
            <Grid item>
              <img src='/static/imgs/GitHub-Mark-64px.png' className={classes.icons}/>
            </Grid>
            <Grid item>
              <img src='/static/imgs/Twitter_Social_Icon_Circle_Color.png' className={classes.icons}/>
            </Grid>
            <Grid item>
              <img src='/static/imgs/linkedin.png' className={classes.icons}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Grid item xs={10} sm={10} md={6} lg={6}>
            <Typography variant='title' component='p'>
              Whats up, Im Jacolby. Im a Full-Stack Web Developer currently
              living in Plano, Tx. Currently, I am using my network to find
              projects in order to futher advance my skills and portfolio. While I
              enjoy building products accross the full-stack, I also enjoy talking
              about tech from a broad overview and how it will change us in the
              future.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}



export default withStyles(styles)(About);
